Solution 1: Convert Sorted Linked List to Binary Search Tree

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// This function converts a sorted linked list to a balanced BST
function sortedListToBST(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.value);

  // Find the middle element in the linked list
  let prev = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // Disconnect the left half from the middle
  prev.next = null;

  // The middle element becomes the root
  const root = new TreeNode(slow.value);
  // Recursively build the left subtree
  root.left = sortedListToBST(head);
  // Recursively build the right subtree
  root.right = sortedListToBST(slow.next);

  return root;
}

Solution 2: Merge Two Binary Trees by Doing Node Summation

function mergeTrees(t1, t2) {
  if (!t1 && !t2) return null;
  let val = (t1 ? t1.value : 0) + (t2 ? t2.value : 0);
  let newNode = new TreeNode(val);

  newNode.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
  newNode.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);

  return newNode;
}

Solution 3: Linked List in Binary Tree

function isSubPath(head, root) {
  if (!head) return true; // Empty linked list, trivially true
  if (!root) return false; // Empty tree, cannot match linked list

  // Check if linked list starting from head is in the tree starting from root
  if (head.value === root.value) {
    if (dfsCheck(head, root)) return true;
  }

  // Otherwise, try the left and right subtrees
  return isSubPath(head, root.left) || isSubPath(head, root.right);
}

function dfsCheck(listNode, treeNode) {
  // If the list is exhausted, we've matched the whole list
  if (!listNode) return true;

  // If the tree is exhausted or values are different, it's not a match
  if (!treeNode || listNode.value !== treeNode.value) return false;

  // Continue with the next node in the list and both subtrees
  return dfsCheck(listNode.next, treeNode.left) || dfsCheck(listNode.next, treeNode.right);
}

Solution 4: Flatten Binary Tree to Linked List

function flatten(root) {
  if (!root) return;

  // Flatten left and right subtrees
  flatten(root.left);
  flatten(root.right);

  // Store the right subtree
  let rightSubtree = root.right;

  // Replace the right subtree with the left subtree
  root.right = root.left;
  root.left = null; // Set the left child to null

  // Find the end of the new right subtree
  let current = root;
  while (current.right) {
    current = current.right;
  }

  // Attach the original right subtree
  current.right = rightSubtree;
}
