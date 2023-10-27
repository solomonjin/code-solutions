/*
Solution will utilize a hashmap to keep track of key/value pairs that are being stored in the cache as well as
a double linked list to keep track of the least and most recent used values.

On initialization, left and right dummy nodes will be created (left = least recent, right = most recent)
Whenever a value is retrieved from the cache, it will be removed from the list and moved to the rightmost position (most recent).
Whenever a new value is inserted into the cache, it will also be inserted at the right most position of the list.
Then, if the cache is over capacity, the left most value will be removed (least recent)

Need to use Map rather than object. Getting size of object in JS is not constant
*/

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  this.left.next = this.right;
  this.right.prev = this.left;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // Update the retrieved node to be most recently used
    this.removeNode(this.cache.get(key));
    this.insertNode(this.cache.get(key));
    return this.cache.get(key).val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // If key already exists, first remove it from the list
  if (this.cache.has(key)) this.removeNode(this.cache.get(key));
  // Will automatically either update the existing value to the newly created Node or create a new key/value pair with the new node.
  this.cache.set(key, new Node(key, value));
  this.insertNode(this.cache.get(key));

  // Check if we are over capacity. If so, delete the LRU
  if (this.cache.size > this.capacity) {
    const lru = this.left.next;
    this.removeNode(lru);
    delete this.cache.delete(lru.key);
  }
};

// Remove a given node from the list
LRUCache.prototype.removeNode = function (node) {
  const [prev, next] = [node.prev, node.next];
  next.prev = prev;
  prev.next = next;
};

// Insert a node into the list at the rightmost position (most recent node)
LRUCache.prototype.insertNode = function (node) {
  const [prev, next] = [this.right.prev, this.right];
  prev.next = next.prev = node;
  node.prev = prev;
  node.next = next;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
