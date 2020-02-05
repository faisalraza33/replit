/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(array) {
    let toReturn = new ListNode();
    let tail = toReturn;
    array.map(value => {
        let newNode = new ListNode(value);
        tail.next = newNode;
        tail = newNode;
    });
    return toReturn.next;
}

function mergeTwoLists1(l1, l2) {
    let toReturn = new ListNode();
    let tail = toReturn;
    while (l1 || l2) {
        l1 = findHighestNode(l1);
        l2 = findHighestNode(l2);
    }
    return toReturn.next;

    function findHighestNode(list) {
        if (list) {
            if (!tail.val) {
                tail.val = list.val;
            }
            let node = list.val > tail.val ? new ListNode(list.val) : new ListNode(tail.val)
            if (list.val < tail.val) {
                tail.val = list.val;
            }
            tail.next = node;

            tail = node;
            list = list.next;
        }
        return list;
    }
};

function traverseList(node) {
    let toReturn = []
    while (node) {
        if (node) {
            toReturn.push(node.val)
            node = node.next;
        }
    }
    return toReturn;
}

/*
Time complexity : O(n + m)O(n+m)

Because exactly one of l1 and l2 is incremented on each loop iteration, the while loop runs for a number of iterations equal to the sum of the lengths of the two lists. All other work is constant, so the overall complexity is linear.

Space complexity : O(1)O(1)

The iterative approach only allocates a few pointers, so it has a constant overall memory footprint.
*/
function mergeTwoLists(list1, list2) {
    let head = new ListNode(-1);
    let tail = head;

    while (list1 && list2) { // O(n+m)
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 ? list1 : list2;

    return head.next;
}


//Senario one -- [1,1,2,3,4,4]
l1 = createList([1, 2, 4]);
l2 = createList([1, 3, 4]);

l3 = mergeTwoLists(l1, l2);
l4 = JSON.stringify(l3);
console.log(traverseList(l3), l4)

// Senario two -- [1,3,4,5]
l1 = createList([5]);
l2 = createList([1, 3, 4]);

l3 = mergeTwoLists(l1, l2);
l4 = JSON.stringify(l3);
console.log(traverseList(l3), l4)

// Senario two -- [1,2]
l1 = createList([2]);
l2 = createList([1]);

l3 = mergeTwoLists(l1, l2);
l4 = JSON.stringify(l3);
console.log(traverseList(l3), l4)

// Senario two -- [-9,3,5,7]
l1 = createList([-9, 3]);
l2 = createList([5, 7]);

l3 = mergeTwoLists(l1, l2);
l4 = JSON.stringify(l3);
console.log(traverseList(l3), l4)


// Senario two -- [-9,-6,-3,-2,-1,1,5,6]
l1 = createList([-2, 5]);
l2 = createList([-9, -6, -3, -1, 1, 6]);

l3 = mergeTwoLists(l1, l2);
l4 = JSON.stringify(l3);
console.log(traverseList(l3), l4)