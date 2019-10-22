// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。

// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/most-common-word
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// 输出: "ball"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/most-common-word
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  var arr = paragraph.replace('.', '').toLowerCase().split(/[\s,!?;'".]+/)
  var countMap = new Map()
  for(let i = 0; i < arr.length; i++) {
    const val = countMap.get(arr[i]) || 0
    if(banned.includes(arr[i])) {
      continue
    }
    countMap.set(arr[i], val+1)
  }
  countMap = Array.from(countMap)
  countMap = countMap.sort((a, b) =>  b[1] - a[1])
  console.log(countMap)
  return countMap[0][0]
};
var a = [
"G! E? s. x! O; o, q' v. w. Y; i. f' u' h! Y' u. p; i! v; P! m! R? V; u? k? v. z, T. o. L, y' z. v, w? s. J' p, p' q, T; z' n' X? I' R; o? Z. U, z; z? L, z. x! F; R? w. K, u! X? m; G! X. q' R' K, y! X! H. T' u, u' y! w' n? M, V? U' Y. Z? i, s' K; U! U' j? W, x? t, J? q. z. K; x. U. v, r, y? q. v; T! K? p, r? n' N. R? M? X? O; h; X; V! l, z' P, q, t. J, l; r' Z; h; F, K, X. P' Q; x' Q. O, v. z! E; K' P, u' O' O! W! p! z? V? x' Z. j. s; n' R' F? W; w, W; X; t' p, z' y' G? s! y? u! y, R; S; y' C. m; k; S' L' V. I' x, i' y. T; W? v. t; V; H; u, v? E, S. W! s; N; N? o? s? M. T; X. R, P, q' I, m. b, z. x; G! S' X. s. l! n' y? c, Y! n, o! Z? t? t? n; R? U? H, o; Z! n' R! y, R. q. u? F' d, Y. o' N, u' T' U, P, s? n' s; w' B. W' M? u; m! m' f? v. L? z, r; q. w! h, g! i, V. g! L! w; O; q? c! l, W; t! m. l' y' r; z' P' T! Z' q. x? P' V. r; r. o; x? X, s, X' p; T; Z' U! K' Q! D' z. Y; w. Q! N' J. w? P! Y; A; y' s, Q' s; j. k? m! e; z, v, q! w? Z; W! j? Z! T' G, Y! V' W; y. W; l! t' j' D' y; I. Y,",
["u","x","i","v","w","q","l","t","n","k","o","h","r","d","c","f","m","j","p","g"]
]
console.log(mostCommonWord(a[0], a[1]))