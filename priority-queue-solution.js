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
    const newNode = new Node(data, priority);
    if (!this.head || this.head.priority >= priority) {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      return this;
    }
    let walker = this.head;
    while (walker.next && walker.next.priority < priority) {
      walker = walker.next;
    }
    const oldNext = walker.next;
    walker.next = newNode;
    newNode.next = oldNext;
  }
  peek() {
    return this.head;
  }
  dequeue() {
    const oldHead = this.head;
    const newHead = this.head.next;
    oldHead.next = null;
    this.head = newHead;
    return oldHead;
  }
}

module.exports = {
  bracketMatching,
  priorityQueue
}