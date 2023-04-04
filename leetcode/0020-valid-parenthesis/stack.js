export class Stack {
  constructor() {
    this.stack = []
  }

  pop() {
    return this.stack.pop();
  }

  push(item) {
    this.stack.push(item)
  }

  getSize() {
    return this.stack.length; 
  }

  isEmpty() {
    return this.stack.length === 0; 
  }

  peek() {
    return this.stack[this.getSize()-1]
  }
}
