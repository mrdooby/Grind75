// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = function(list1, list2) {
  // while loop
  // compare first two values
    // if list1.val > list2.val
      // add list2.val to new list
      // list2.next.val will be up next for comparison
    // if list1.val < list2.val
      // add list1.val to new list
      // list1.next.val will be up next for comparison
    // if list1.val === list2.val
      // add both
      // both next val will be next for comparison

  let list = new ListNode();
  let head = list;

  while (list1 || list2) {
    if (list1.val > list2.val) {
      list.next
    }
  }
};

/*
Attempt 2: 8/31/2022
-- min

Could not solve

Key Takeways:
Need to review linked lists
*/

/*
Attempt 1: 8/29/2022
09:45 min

Could not solve

Key Takeways:
Need to review linked lists
*/