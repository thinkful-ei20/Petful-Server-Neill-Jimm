const Node = require('./Node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    let newNode = new Node(data);

    if(this.first === null){
      this.first = newNode;
    }

    if(this.last){
      newNode.ahead = this.last;
      this.last.behind = newNode;
    }

    this.last = newNode;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    let toRemove = this.first;
    this.first = toRemove.behind;
    if(toRemove === this.last){
      this.last = null;
    }
    return toRemove.data;
  }

  peek(){
    if(this.first){
      return this.first.data;
    }
    return this.first;
  }
}

module.exports = Queue;