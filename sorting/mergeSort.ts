// implementing merge sort algorithm


function mergeSort(arr: number[],low: number, high: number){
    if(low >= high){
        return;
    }

    /// find the middle index
    let mid = Math.floor((low + high) / 2);

    // recursively sort the left half
    mergeSort(arr, low, mid);

    // recursively sort the right half 
    mergeSort(arr, mid+1, high);

    // merge the sorted halves
    merge(arr, low, mid, high);
}

function merge(arr: number[], low: number, mid: number, high: number){
    let temp: number[] = [];

    // store elements in temp array in sorted manner
    let left = low;
    let right = mid + 1;

    while(left <= mid && right <= high){
        if(arr[left] < arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }


    // add the remaining left half elements
    while(left <= mid){
        temp.push(arr[left]);
        left++;
    }

    // add the remaining right half elements
    while(right <= high){
        temp.push(arr[right]);
        right++;
    }


    // copy the elements from temp to original array
    let i=0;
    let j=low;
    while(i < temp.length){
        arr[j] = temp[i];
        i++;
        j++;
    }

}


// Example Usage
const arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length-1);
console.log(arr); // Output: [5, 6, 7, 11, 12, 13]