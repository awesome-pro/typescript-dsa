export default class Queue<T>{  
    private items: T[] = [];

    enqueue(value: T){
        this.items.push(value);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    print() {
        console.log(this.items);
    }

    getLength() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    toArray() {
        return this.items;
    }
}

