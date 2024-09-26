// function to get floor
function getFloor(arr: number[], target: number): number{
    let low=0, high=arr.length-1;
    let ans=-1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] <= target){
            ans = arr[mid];
            low = mid + 1;
        }else{
            high = mid-1;
        }
    }

    return ans;
}

function getCeiling(arr: number[], target: number): number{
    let low = 0, high = arr.length-1;
    let ans = -1;

   while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] >= target){
            ans = arr[mid];
            high = mid-1;
        }else{
            low= mid+1;
        }
   }
    return ans;
}

function getFloorAndCeiling(arr: number[], target: number){
    let floor = getFloor(arr, target);
    let ceiling = getCeiling(arr, target);

    return [floor, ceiling];
}   


// Test cases

const result = getFloorAndCeiling(
    [1, 2, 3, 5, 9, 10, 32, 53],
    100
)

console.log(result)