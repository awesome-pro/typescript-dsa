import java.util.*;

public class SortStack {

    public static void main(String[] args) {


         // Example 1
         Stack<Integer> stack1 = new Stack<>();
         stack1.push(3);
         stack1.push(2);
         stack1.push(1);
         Stack<Integer> sortedStack1 = sort(stack1);
         System.out.println("Sorted Stack 1: " + sortedStack1);  // Output: [3, 2, 1]
 
         // Example 2
         Stack<Integer> stack2 = new Stack<>();
         stack2.push(11);
         stack2.push(2);
         stack2.push(32);
         stack2.push(3);
         stack2.push(41);
         Stack<Integer> sortedStack2 = sort(stack2);
         System.out.println("Sorted Stack 2: " + sortedStack2);  // Output: [41, 32, 11, 3, 2]
    }

    static void  insertSorted(Stack<Integer> stack, int element){
        // base case: if the stack is empty or the top of the stack is less than the element
        if(stack.isEmpty() || stack.peek() < element){
            stack.push(element);
            return;
        }

        // else pop the top element and insert the element recursively
        int top = stack.pop();
        insertSorted(stack, element);

        // insert the popped element back to the stack
        stack.push(top);
    }

    static  void sortStack(Stack<Integer> stack){
        if(stack.isEmpty() || stack.size() == 1){
            return;
        }

        int top = stack.pop();


        sortStack(stack);


        insertSorted(stack, top);
    }

    // Function to sort the stack and return it
    static  Stack<Integer> sort(Stack<Integer> stack) {
        sortStack(stack);
        return stack;
    }
}