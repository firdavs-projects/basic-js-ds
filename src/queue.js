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
  }

  getUnderlyingList() {
    let current = this.list;
    while (this.list.next) {
      this.list = this.list.next;
    }
    const result = this.list;
    this.list = current;
    return result;
    // remove line with error and write your code here
  }

  enqueue(value) {
    let current = this.list;
    while (this.list.next) {
      this.list = this.list.next;
    }
    this.list.next = new ListNode(value);
    this.list = current;
    // remove line with error and write your code here
  }

  dequeue() {
    let current = this.list;
    if (this.list.next) {
      this.list = this.list.next;
      current.next = null;
      return current.value;
    } else {
      return null;
    }

    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
