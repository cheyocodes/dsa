export default class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Appends the item argument to the 
   * back of the items array 
   * @param {*} item 
   */
  push(item) {
    this.items.push(item)
  }

  /**
   * Removes the last item in the array 
   * and returns it 
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Returns the last item in the array without 
   * removing it from the bottom
   */
  peek() {
    if (this.items.length == 0) {
      return null;
    }

    return this.items[this.items.length - 1]; 
  }

  /**
   * Returns the size of the stack
   */
  getSize() {
    return this.items.length;
  }

  /**
   * Returns true if the stack is empty 
   * and false if it is not
   */
  isEmpty() {
    return this.getSize() === 0; 
  }
}