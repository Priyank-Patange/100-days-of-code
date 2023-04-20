// 1 --> 5 --> 10 --> 16
// linkedList = {
//     value: 1,
//     next: {
//         value: 5,
//         next: {
//             value: 10,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this;
    }
    printList() {
        let currentNode = this.head;
        let arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        if (index == 0) {
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }
        let newNode = new Node(value);
        let beforeNode = this.traverseToIndex(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.next = afterNode;
        this.length++;
        return this;
    }
    remove(index) {
        let beforeNode = this.traverseToIndex(index - 1);
        let nodeToBeRemoved = beforeNode.next;
        beforeNode.next = nodeToBeRemoved.next
        this.length--;
        return this;
    }

    //bit difficult but important
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next
        while (second) {
            let temp = second.next;
            second.next = first
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++
        return this;
    }
    printList() {
        let currentNode = this.head;
        let arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        if (index == 0) {
            return this.prepend(value);
        }
        if (index >= this.length) {
            return this.append(value);
        }
        let newNode = new Node(value);
        let beforeNode = this.traverseToIndex(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.previous = beforeNode;
        newNode.next = afterNode;
        afterNode.previous = newNode;
        this.length++;
        return this;
    }
    remove(index) {
        let beforeNode = this.traverseToIndex(index - 1);
        let nodeToBeRemoved = beforeNode.next;
        let afterNode = nodeToBeRemoved.next;
        beforeNode.next = nodeToBeRemoved.next;
        afterNode.previous = beforeNode;
        this.length--;
        return this;
    }
}

const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
console.log(myLinkedList.printList()); // 1, 10, 5
myLinkedList.insert(1, 4);
console.log("after inserting")
console.log(myLinkedList.printList()); // 1, 4, 10, 5
myLinkedList.remove(1, 4);
console.log("after removing")
console.log(myLinkedList.printList()); // 1, 10, 5