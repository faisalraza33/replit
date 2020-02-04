/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    // Create a new list to return
    let toReturn = new ListNode(0);
    let tail = toReturn; // keep the last node

    // Loop until one of the list has node
    let carryOver = 0
    while (l1 || l2) {
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let remainder = (carryOver + l1Value + l2Value) % 10
        carryOver = ((carryOver + l1Value + l2Value) / 10) >= 1 ? 1 : 0
        let newNode = new ListNode(remainder);
        tail.next = newNode;
        tail = newNode;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carryOver > 0) {
        let newNode = new ListNode(CarryOver);
        tail.next = newNode;
        tail = newNode;
    }

    return toReturn.next;
};