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

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


//Senario one -- [1,1,2,3,4,4]
n1 = new TreeNode(1);
n2 = new TreeNode(2);
n3 = new TreeNode(2);

n4 = new TreeNode(4);
n5 = new TreeNode(5);
n6 = new TreeNode(6);

n4.left = n3
n4.right = n6
n5.left = n1
n5.right = n4

console.log(isValidBST(n5));

nn1 = new TreeNode(1)
nn1.left = n1
console.log(isValidBST(nn1));

function isValidBST(root) {
    let queue = [root];

    while (queue.length) {
        let current = queue.shift();
        if (current) {
            if (current.left) {
                if (current.left.val >= current.val) {
                    return false;
                } else {
                    queue.push(current.left);
                }
            }
            if (current.right) {
                if (current.right.val <= current.val) {
                    return false;
                } else {
                    queue.push(current.right);
                }
            }
        }
    }
    return true;
}