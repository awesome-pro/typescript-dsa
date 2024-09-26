function searchInsert(nums: number[], target: number): number {
    let low = 0, high  = nums.length-1;
    let ans = nums.length;

    while(low <= high){
        let mid = Math.floor((low + high) /2 )
        if(nums[mid] >= target){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return ans;
};


const result = searchInsert(
    [1, 2, 4, 6, 8, 23, 97, 100], 77
)

console.log(result)