export default class Stack<T>{
    private items: T[] = [];

    push(value: T){
        this.items.push(value);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
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