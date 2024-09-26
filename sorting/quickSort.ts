// implementation of quick sort algorithm

// Approach 1

function quickSort(arr: number[]): number[]{
   if(arr.length <= 1){
    return arr;
   }

   const pivot = arr[0];

   const leftArray: number[] = [];
   const rightArray: number[] = [];

   // partition the array from the second element as the first element is the pivot
   for(let i=1; i<arr.length; i++){
    if(arr[i] < pivot){
        leftArray.push(arr[i]);
    }else{
        rightArray.push(arr[i]);
    }
   }

   // recursively sort the left and right halves arrays and concatenate them with pivot
   return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// Approach 2

function quickSort2(arr: number[], low: number, high: number){
    if(low < high){
        const pi = partition(arr, low, high);
        quickSort2(arr, low, pi - 1);
        quickSort2(arr, pi + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number{
    const pivot = arr[high];
    let i = low - 1;

    for(let j=low; j<high; j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}

function quickSortInPlace(arr: number[], low: number = 0, high: number = arr.length - 1): void {
    if (low < high) {
        // Find the pivot index after partitioning the array
        const pivotIndex = partition3(arr, low, high);

        // Recursively sort the left half and right half
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
}

function partition3(arr: number[], low: number, high: number): number {
    // Choose the pivot as the first element (or you can change it to the last element if needed)
    const pivot = arr[low];
    let left = low + 1;
    let right = high;

    while (left <= right) {
        // Move the left pointer until we find an element larger than the pivot
        while (left <= right && arr[left] <= pivot) {
            left++;
        }

        // Move the right pointer until we find an element smaller than the pivot
        while (left <= right && arr[right] >= pivot) {
            right--;
        }

        // Swap elements at left and right if they are in the wrong order
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    // Finally, swap the pivot with the element at the right pointer (where smaller elements are located)
    [arr[low], arr[right]] = [arr[right], arr[low]];

    // Return the pivot index
    return right;
}

// Example usage:
const arr3 = [3, 6, 8, 10, 1, 2, 1];
quickSortInPlace(arr3);
console.log(arr3); // Output: [1, 1, 2, 3, 6, 8, 10]
