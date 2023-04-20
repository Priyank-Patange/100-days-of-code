class Stack{
    constructor(){
        this.array = [];
    }
    
    peek(){
        return this.array[this.array.length -1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        return this.array.pop();
    }
}

const s = new Stack();
s.push("google");
s.push("youtube");
s.push("gmail");
console.log(s.peek()); //gmail
console.log(s); //Stack { array: [ 'google', 'youtube', 'gmail' ] }
s.pop();
console.log(s) //Stack { array: [ 'google', 'youtube' ] }
