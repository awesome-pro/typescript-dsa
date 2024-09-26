function firstLast(arr: number[], target: number): [number, number] {
    let start = 0;

    while(arr[start] < target){
        start++;
    }

    if(arr[start+1] == target){
        let i = start+1;
        while(arr[i+1] == target){
            i++;
        }

        return [start+1, i];
    }


    return [-1, -1];
}


// Test

const result =  firstLast([1, 2, 3, 4, 4, 5, 6], 4);
console.log(result);