// 你现在是棒球比赛记录员。
// 给定一个字符串列表，每个字符串可以是以下四种类型之一：
// 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
// 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
// 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
// 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

// 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
// 你需要返回你在所有回合中得分的总和。

// 输入: ["5","2","C","D","+"]
// 输出: 30
// 解释: 
// 第1轮：你可以得到5分。总和是：5。
// 第2轮：你可以得到2分。总和是：7。
// 操作1：第2轮的数据无效。总和是：5。
// 第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
// 第4轮：你可以得到5 + 10 = 15分。总数是：30。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/baseball-game
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var count = 0
  var arr = []
  for(let i = 0; i < ops.length; i ++) {
    const value = ops[i]
    if(isNaN(value*1)) {
      if(value === '+') {
        const s = arr[arr.length -1] + arr[arr.length -2]
        count += s
        arr.push(s)
        continue
      }
      if(value === 'D') {
        const s = arr[arr.length -1] * 2
        count += s
        arr.push(s)
        continue
      }
      if(value === 'C') {
        count -= arr[arr.length -1]
        arr.pop()
        continue
      }
    } else {
      count += value * 1
      arr.push(value * 1)
    }
  }
  return count
};


var a = ["5","2","C","D","+"]
calPoints(a)