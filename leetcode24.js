/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
  function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(head == null || head.next == null) return head
  let curr = head
  head = head.next
  let last = null
  while (curr != null && curr.next != null ) {
    let a = curr.next
    let b = a.next
    a.next = curr
    curr.next = b
    if(last!=null) last.next = a
    last = curr
    curr = b
  }
  return head
};

var a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
// 给定 1->2->3->4, 你应该返回 2->1->4->3.
// console.log(a)
console.log(swapPairs(a))