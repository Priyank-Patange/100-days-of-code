class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//LIFO
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    //get top value
    peek(){
        return this.top;
    }
    // add to the top
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    //remove top that is last item
    pop() {
      if(this.length === 0){
          return null;
      }
      if(this.length === 1) {
         this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return holdingPointer;
    }
}
const s = new Stack();
s.push("google");
s.push("youtube");
s.push("gmail");
console.log(s.peek()); //Node {value: 'gmail', next: Node { value: 'youtube', next: Node { value: 'google', next: null } }}
console.log(s);  //Stack {  top: Node {value: 'gmail', next: Node { value: 'youtube', next: [Node] }}, bottom: Node { value: 'google', next: null }, length: 3}
s.pop();
s.pop();
console.log(s.pop()); //Node { value: 'google', next: null }
console.log(s); //Stack { top: null, bottom: null, length: 0 }