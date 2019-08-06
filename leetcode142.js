/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一
// var detectCycle = function(head) {
//   if(head == null || head.next == null) return null
//   let curr = head
//   let arr = []
//   while (curr.next) {
//     if (arr.includes(curr)) {
//       return curr
//     } else {
//       arr.push(curr)
//       curr = curr.next
//     }
//   }
//   return null
// };
// 方法二
var detectCycle = function(head) {
  if(head == null || head.next == null) return null
  let fast, slow, meet
  fast = slow = head
  let hasCycle = false
  while (fast && slow && fast.next) {
      slow = slow.next
      fast = fast.next.next
    if (slow === fast) {
      hasCycle = true
      meet = slow
      break
    }
  }
  if(hasCycle) {
    let curr = head
    while(curr != meet) {
      curr = curr.next
      meet = meet.next
    }
    return curr
  }
  return null
};