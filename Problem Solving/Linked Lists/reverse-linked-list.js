/* Question link: https://leetcode.com/problems/reverse-linked-list/ */

/* Optimized Solution :
   Time Complexity -> O(n) and 
   Space Complexity -> O(1)
 */

var reverseList = function (head) {

    let prevNode = null;
    let currentNode = head;
    let nextNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    return prevNode;
}
