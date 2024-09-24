class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T){
        this.value = value;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null = null;
    private length: number = 0;
    private tail: ListNode<T> | null = null;

    append(value:T) {
        const newNode = new ListNode(value);
        if(this.tail){
            this.tail.next = newNode;
        }
        if(!this.head){
            this.head = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    removeFirst() {
        if(!this.head) return;
        this.head = this.head.next
        this.length--;
    }

    removeLast() {
        if(!this.head) return;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }
        let current = this.head;
        while(current){
            if(current.next === this.tail){
                current.next = null;
                this.tail = current;
                this.length--;
                return;
            }
        }
    }

    // remove a node with given value
    remove(value: T): void {
        if(!this.head) return;

        if(this.head.value === value){
            this.head.next = this.head;
            return;
        }

        let current = this.head;
        while(current.next && current.next.value !== value){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next;
        }
    }

    print(): void {
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

    getLength() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    getAt(index: number) {
        let current = this.head;
        let counter = 0;
        while(current){
            if(counter === index){
                return current;
            }
            counter++;
            current = current.next;
        }
        return null;
    }
}