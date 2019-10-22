// 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
/*
输入: [0,1,2,4,5,7]
输出: ["0->2","4->5","7"]
解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(!nums.length) return []
    let arr = []
    let start = 0
    let end = 1
    arr.push([])
    for(let i = 0; i < nums.length; i ++) {
      const a = isContinuity(nums.slice(start, end))
      if(isContinuity(nums.slice(start, end))) {
        arr[arr.length - 1].push(nums[i])
      } else {
        arr[arr.length - 1] = formate(arr[arr.length - 1])
        arr.push([nums[i]])
        start = i
      }
        end ++
    }
    arr[arr.length - 1] = formate(arr[arr.length - 1])
    return arr
};

function isContinuity(arr) {
  let k;
  for(let i = 0; i < arr.length; i ++) {
    if(k !== undefined && arr[i] - k !== 1) {
      return false
    }
    k = arr[i]
  }
  return true
}
function formate(arr) {
  var len = arr.length
  if(len === 1) return arr[0] + ''
  return `${arr[0]}->${arr[len - 1]}`
}

var a = [0,1,2,4,5,7]
var b = [0,2,3,4,6,8,9]
summaryRanges(b)