/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = null
    let arr = []
    for(let i = 0; i < nums.length; i ++) {
        if(k !== nums[i] ) {
        console.log(k, nums[i])

           arr.push(nums[i])
         }
        k = nums[i]
    }
    for(let i = 0; i < arr.length; i ++) {
        nums[i] = arr[i]
    }
    return arr.length
};
const nums = [1,1,2]
console.log(
removeDuplicates(nums))