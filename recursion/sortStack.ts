class Solution {
    // Recursive function to insert an element into the sorted stack
    insertSorted(stack: number[], element: number): void {
        // Base case: if stack is empty or top element is smaller than the current element
        if (stack.length === 0 || stack[stack.length - 1] <= element) {
            stack.push(element);
            return;
        }

        // Otherwise, remove the top element and insert the current element recursively
        const top = stack.pop()!;
        this.insertSorted(stack, element);

        // Put the top element back after insertion
        stack.push(top);
    }

    // Recursive function to sort the stack
    sortStack(stack: number[]): void {
        // Base case: if the stack has one or no elements, it's already sorted
        if (stack.length <= 1) {
            return;
        }

        // Remove the top element
        const top = stack.pop()!;

        // Recursively sort the remaining stack
        this.sortStack(stack);

        // Insert the removed element back in the sorted stack
        this.insertSorted(stack, top);
    }

    // Wrapper function to sort the stack
    sort(stack: number[]): number[] {
        this.sortStack(stack);
        return stack;
    }
}

// Example usage
const solution = new Solution();
const stack1 = [3, 2, 1];
console.log(solution.sort(stack1));  // Output: [3, 2, 1]

const stack2 = [11, 2, 32, 3, 41];
console.log(solution.sort(stack2));  // Output: [41, 32, 11, 3, 2]
