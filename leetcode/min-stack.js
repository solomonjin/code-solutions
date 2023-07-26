var MinStack = function () {
  this.stack = [];
  this.minStack = [];     // A second stack to keep track of the current min number at each node of the original stack
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  const min = this.minStack.length !== 0                          // If minStack is empty, the lowest min will just be the given value.
    ? Math.min(val, this.minStack[this.minStack.length - 1])    // Otherwise, get the min between last known min and new given value.
    : val;
  this.minStack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
