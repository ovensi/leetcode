// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

// 在 S 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
// 输入："abbaca"
// 输出："ca"
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    var arr = S.split('')
    var target = []
    for(let i = 0; i < arr.length; i ++) {
      const value = arr[i]
      if(value === target[target.length -1]) {
        target.pop()
      } else {
        target.push(value)
      }
    }
    console.log(target)
    return target.join('')
};

var a = 'abbaca'

removeDuplicates(a)