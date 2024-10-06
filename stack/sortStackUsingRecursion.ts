import Stack from "./stack";

function sortStack(stack: Stack<number>){
    // base case
    if(!stack.isEmpty()){
        return;
    }

    // pop the top element and sort the stack
    let top = stack.pop();
    sortStack(stack);

    // insert the top element back in the stack
    sortedInsert(stack, top!);
}

function sortedInsert(stack: Stack<number>, element: number){
    // base case: if the stack is empty or the top of stack is less than element
    if(stack.isEmpty() || stack.pop()! < element){
        stack.push(element);
        return;
    }

    // pop the stack, and recurse to insert
    let top = stack.pop();
    sortedInsert(stack, element);

    // push the top back into the stack
    stack.push(top!);
}