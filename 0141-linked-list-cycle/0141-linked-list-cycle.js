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
const hasCycle = function(head) {
    // 플로이드 순환 알고리즘!
    if (head === null || head.next === null) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};
