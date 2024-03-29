/**
有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

 

示例 1：

输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
示例 2：

输入："(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每隔部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
示例 3：

输入："()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-outermost-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

 /**
 * @param {string} S
 * @return {string}
 */
// var removeOuterParentheses = function(S) {
//  const arr = []
//  arr.push('')
//  var left = 0
//  var right = 0
//  for(let i = 0; i < S.length; i ++) {
//    if(S[i] === ')' 
//   && (arr[arr.length -1].length % 2) 
//   && left === right + 1) {
//      arr[arr.length -1] += ')'
//      arr.push('')
//      left = right = 0
//    } else {
//      arr[arr.length -1] += S[i]
//      S[i] === '(' && left ++
//      S[i] === ')' && right ++
//    }
//  }
//  console.log(arr)
//   const res = arr.map(value => {
//    return value.substring(1, value.length -1)
//  }).join('')
//  console.log(res)
//   return res
// };

var removeOuterParentheses = function (S) {
  var result = '',
      count = 0,
      s = 0;
  for(let i = 0; i < S.length; i ++) {
    if(S[i] === '(') {
      count ++
    } else {
      count --
    }
    if(count === 0) {
      result += S.slice(s + 1, i)
      s = i + 1
    }
  }
  return result
}

var a = "(()())(())"
var b = '()()'
var c = '(()())(())'
var d = "(()())(())(()(()))"

removeOuterParentheses(d)