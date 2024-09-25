// ListNode class for the Linked List
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class
class LinkedList<T> {
    head: ListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert a new ListNode at the end of the list
    append(value: T): void {
        const newListNode = new ListNode(value);
        if (!this.head) {
            this.head = newListNode;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next !== null) {
                    if (current.next !== null) {
                        current = current.next;
                    }
                }
            }
            current.next = newListNode;
        }
        this.size++;
    }

    // Insert a new ListNode at the beginning of the list
    prepend(value: T): void {
        const newListNode = new ListNode(value);
        newListNode.next = this.head;
        this.head = newListNode;
        this.size++;
    }

    // Insert a new ListNode at a specific position
    insertAt(value: T, index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        const newListNode = new ListNode(value);
        if (index === 0) {
            newListNode.next = this.head;
            this.head = newListNode;
        } else {
            let current = this.head;
            let prev: ListNode<T> | null = null;
            let i = 0;

            while (i < index && current) {
                prev = current;
                current = current.next;
                i++;
            }

            newListNode.next = current;
            if (prev) prev.next = newListNode;
        }
        this.size++;
    }

    // Remove a ListNode at a specific position
    removeAt(index: number): T | null {
        if (index < 0 || index >= this.size || !this.head) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;
        let prev: ListNode<T> | null = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            let i = 0;
            while (i < index && current) {
                prev = current;
                current = current.next;
                i++;
            }
            if (prev && current) {
                prev.next = current.next;
            }
        }

        this.size--;
        return current ? current.value : null;
    }

    // Get the value at a specific position
    getAt(index: number): T | null {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;
        let i = 0;

        while (i < index && current) {
            current = current.next;
            i++;
        }

        return current ? current.value : null;
    }

    // Print all the ListNodes in the list
    printList(): void {
        let current = this.head;
        const result: T[] = [];

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}

// Example Usage
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2);
list.printList(); // Output: 5 -> 10 -> 15 -> 20

console.log(list.getAt(2)); // Output: 15

list.removeAt(1);
list.printList(); // Output: 5 -> 15 -> 20
