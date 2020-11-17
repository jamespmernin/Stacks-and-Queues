/* 
 * STACK IMPLEMENTATION
 * The idea for this function came from here: https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 * I was able to implement this in JavaScript but that was my only contribution
 */
class Stack {
  constructor() {
    this.items = []
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details

function bracketMatching(input) {
  let s = new Stack;
  let x;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      s.push(input[i]);
    }
    if (s.isEmpty()) {
      return false;
    }
    switch (input[i]) {
      case ')':
        x = s.peek();
        s.pop();
        if (x === '{' || x === '[') {
          return false;
        }
        break;
      case '}':
        x = s.peek();
        s.pop();
        if (x === '(' || x === '[') {
          return false;
        }
        break;
      case ']':
        x = s.peek();
        s.pop();
        if (x === '(' || x === '{') {
          return false;
        }
        break;
    }
  }
  return s.isEmpty();
}

console.log(`Empty result is: ${bracketMatching('')}`);
console.log(`Mismatched result is: ${bracketMatching('{([]))})')}`);
console.log(`Matched result is: ${bracketMatching('{([])}')}`);

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue {
  constructor() {
    this.head = null;
  }
  enqueue(data, priority) {
    // Insert the new data into the proper place in the queue
    // the lowest priority number should be the head node
    // the priorities should remain in order
    // if two nodes have the same priority, put the new one first
  }
  peek() {
    // return the highest priority node in the queue
  }
  dequeue() {
    // remove and return the highest priority node in the queue
  }
}

module.exports = {
  bracketMatching,
  priorityQueue
}