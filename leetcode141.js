/*给定一个链表，判断链表中是否有环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 方法一： 硬判断，就是设定一个时间循环没有结束，就判定有环
// 方法二： 每个节点都留痕，如果遍历到痕迹相同的就判定有环
// 方法三： 龟兔赛跑，设定两个移动的指针，一快一慢，如果两个指针相遇了，就说明有环

// 方法二
// var hasCycle = function(head) {
//   if(head == null || head.next == null) return false
//   let curr = head
//   let next = curr.next
//   let arr = []
//   while (curr.next != null) {
//     if (arr.includes(curr)) {
//       return true
//       break
//     } else {
//       arr.push(curr)
//       curr = curr.next
//     }
//   }
//   return false
// };

// 方法三
var hasCycle = function(head) {
  if(head == null || head.next == null) return false
  let fast, slow
  fast = slow = head

  while (fast && slow && fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
};

var a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)