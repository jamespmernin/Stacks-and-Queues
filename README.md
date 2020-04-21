# Intro to Data Structures with Linked Lists

## Objectives

By the end of this lesson and exercise, you should be able to:

1. Define data structures and give examples.
2. Define what a singly linked list is.
3. Compare and contrast linked lists with arrays.
4. Implement insertion, removal and traversal methods on singly linked lists.

<br>

## Data Structures

A data structure is a _**particular way of containerizing and organizing data** so that a program can **access, analyze, and utilize the data effectively**_.

What are 3 common characteristics of data structures?

<details><summary>Reveal Answer</summary>

- A collection of values.
- A relationship between these values.
- Operations that can manipulate the structure.

</details>

### The Importance of Data Structures

Different data structures excel in different situations. Depending on your dilemma, understanding data structures and their specific use cases can drastically increase your abilit to manipulate and analyze data– plus, they're a big topic in technical interviews!

You've already worked with many data structures– namely two– can you name them?

<details><summary>Reveal Answer</summary>

- Arrays
- Hashes
- (The DOM is technically not a data structure, but )

</details>

In our CS lessons, the data structures we'll be looking into include:

- Singly Linked Lists
- Stacks & Queues
- Hash Tables
- Sets
- Binary Search Trees & Tries
- Binary Heaps
- Graphs

### Classes

Do you remember the characteristics of classes from Object Oriented Programming?

<details><summary>Reveal Answer</summary>

- Classes are templates for objects.
- Javascript calls a `constructor` method when we create a new instance of a class.
- Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
- We use the `extends` keyword to create a subclass.
- The `super` keyword calls the `constructor()` of a parent class.
- Static methods are called on the class, but not on instances of the class.

</details>

<br>

## Introducing (Singly) Linked Lists

A **linked list** is **an ordered, linear data structure**, similar to an array, in which the elements are linked **using chained references** as opposed to an arrays' indices. 

A linked list consists of **nodes**, the first of which is called the **head**, the last of which is called the **tail**. Each node has a **value** and a **pointer** to the next node, or to `null` if it's the tail node.

![singly-linked-list](singly-linked-list.jpg)

Note that the nodes are not stored at contiguous memory locations, but are linked to random memory locations and are linked using pointers. 

This means that **accessing elements in the linked list requires that you start at the `head`, and move subsequently through the list, towards the `tail`**.

In practice, a linked list looks like this:

``` js
const list = {
    head: {
        value: 12
        next: {
            value: 99
            next: {
                value: 37
                next: null
            }
        }
    }
};
```

The `next` property of each node in the linked list is a reference to the next node.

### Linked Lists Versus Arrays

What are some key differences between a linked list and an array?

<details><summary>Reveal Answer</summary>

- Arrays are stored in memory at a single contiguous location– and thus, arrays are 1) restricted to a declared number of elements, and 2) can be randomly accessed.

- Linked Lists are stored at non-contiguous locations– and thus, linked lists make 1) adding and removing elements is much easier, and 2) cannot be randomly accessed, but must be sequentially accessed.

- Arrays are accessible using bracket notation– finding the third element in an array would be found at `arr[2]`.

- Linked lists would require dot notation starting at the head– finding the third element in an array would be found at `list.head.next.next.value`.

</details>

![](comparison.png)

#### Complexity

When considering how you might manipulate the data structure, the time and space complexity for arrays and linked lists have certain advantages over each other:

| Method           | Array |  Linked list |
| ---------------- | :---: | -----------: |
| Reading (Access) | O(1)  |         O(N) |
| Insertion        | O(N)  |         O(1) |
| Removal          | O(N)  | O(1) or O(N) |
| Search           | O(1)  |         O(N) |

With some exceptions:

1. Insertion at the end of the array takes O(N).
2. Removing from end of a linked list takes O(N), because we need to find the item right before the tail and that inlolves going through the whole list.

## Time for an exercise!

In breakout rooms, fork and clone this repo and follow the instructions in `LinkedList.js`.