/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 滑动窗口
  let n = s.length
  let ans = 0
  let map = new Map()
  for(let end = 0, start = 0; end < n; end ++) {
    var alpha = s.indexOf(s[end])
    if(map.get(s[alpha])) {
      start = Math.max(map.get(s[alpha]) || 0, start)
    }
    ans = Math.max(ans, end - start + 1)
    map.set(s[end], end + 1)
  }
    console.log(ans)
  return ans
};
var a = 'abcabcbb'
var b = 'bbbbb'
var c = 'pwwkew'
var d = "aab"
var e = "dvdf"
var f = "ckilbkd"
lengthOfLongestSubstring(c)
