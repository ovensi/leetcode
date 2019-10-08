/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var result = 0
  var size = height.length
  for(let i = 0; i < size - 1; i ++) {
    var left = 0, right = 0
    for(let j = i; j >= 0; j --) {
      left = Math.max(left, height[j])
    }
    for(let j = i; j < size; j ++) {
      right = Math.max(right, height[j])
    }
    result += Math.min(left, right) - height[i]
  }
  return result
};

var a = [0,1,0,2,1,0,1,3,2,1,2,1]
var b = [0,2,0]
var c = [0,2,0,1]
trap(c)