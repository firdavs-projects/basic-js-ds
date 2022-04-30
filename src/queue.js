const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = new ListNode();
    this.size = 0;
  }

  getUnderlyingList() {
    if (this.size === 0) {
      return null;
    }
    return this.list;
  }

  enqueue(value) {
    if (this.size === 0) {
      this.list = new ListNode(value);
    } else {
      let current = this.list;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error('Queue is empty');
    }
    const value = this.list.value;
    this.list = this.list.next;
    this.size--;
    return value;
  }
}

module.exports = {
  Queue
};
