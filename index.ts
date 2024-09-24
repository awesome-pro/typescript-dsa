// Problem: Given an array of integer arr. Your task is to construct the linked list from arr & return the head of the linked list.
// Example: arr = [1, 2, 3, 4, 5]
// Output: 1 -> 2 -> 3 -> 4 -> 5

import Queue from "./queue";
import Stack from "./stack";

// Definition for singly-linked list.
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20
console.log(stack.peek()); // Output: 10
console.log(stack.isEmpty()); // Output: false


const queue =  new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
console.log(queue.isEmpty()); // Output: false
queue.enqueue(30);
queue.clear();

