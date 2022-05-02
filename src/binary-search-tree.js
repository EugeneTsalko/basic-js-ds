const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.node = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.node;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.node = addFunc(this.node, data);
    
    function addFunc(knot, data) {
      if (!knot) {
        return new Node(data);
      }
      if (knot.data === data) {
        return knot;
      }
      if (data > knot.data) {
        knot.right = addFunc(knot.right, data);
      } else {
        knot.left = addFunc(knot.left, data);
      }
      return knot;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let knot = this.find(data);
    if (knot) {
      return true;
    } else {
      return false
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let knot = this.node;
    while (knot !== null){
      if (knot.data === data) 
        return knot;
      else if (data > knot.data)
      knot = knot.right;
      else knot = knot.left;
    }
  return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.node) {
      return;
    }
    let knot = this.node;
    while (knot.left) {
      knot = knot.left;
    }
    return knot.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.node) {
      return;
    }
    let knot = this.node;
    while (knot.right) {
      knot = knot.right;
    }
    return knot.data;
  }
}

module.exports = {
  BinarySearchTree
};