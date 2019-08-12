/*
 * @Author: 斯周
 * @Date: 2019-08-07 22:49:17
 * @LastEditors: 斯周
 * @LastEditTime: 2019-08-12 23:50:25
 */
 var reverseList = function(head) {
    let pre = null
    let curr = head
    let next;
    while (curr != null) {
      next = curr.next
      curr.next = pre;
      pre = curr;
      curr = next;
    }
    return pre
};
var reverseKGroup = function(head, k) {
    let revList = new ListNode(0)
    revList.next = head
    let pre = revList
    let end = revList
    let loopCurr = head
    while (end != null) {
      for(let i = 0; i < k && end != null; i ++ ) {
        end = end.next
      }
      if (end == null) break;
      let start = pre.next
      let next = end.next
      end.next = null;
      pre.next = reverseList(start);
      start.next = next;
      pre = start;
      end = pre;
    }
    return revList.next
};