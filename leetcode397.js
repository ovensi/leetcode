// 给定一个正整数 n，你可以做如下操作：

// 1. 如果 n 是偶数，则用 n / 2替换 n。
// 2. 如果 n 是奇数，则可以用 n + 1或n - 1替换 n。
// n 变为 1 所需的最小替换次数是多少？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/integer-replacement
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 示例 1:

// 输入:
// 8

// 输出:
// 3

// 解释:
// 8 -> 4 -> 2 -> 1

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  if(n === 1) return 0
  var count = 0
  var count2 = 0
  var n2 = n
  while (n !== 2) {
    console.log(n, count)
    if(n % 2 === 0) {
      n = n / 2
    } else {
      n = n + 1
      count ++
      continue;
    }
    count ++
  }
  while (n2 !== 2) {
    if(n2 % 2 === 0) {
      n2 = n2 / 2
    } else {
      n2 = n2 - 1
      count2 ++
      continue;
    }
    count2 ++
  }
  return Math.min(count, count2) + 1
};

var a = 8
var b = 7
var c = 10000
console.log(

integerReplacement(c)
)