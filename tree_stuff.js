Problem 1: Flood Fill
Description:

An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a 
flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 
4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same 
color), and so on. Replace the color of all of the aforementioned pixels with 
newColor.

Return the modified image after performing the flood fill.

Example:

plaintext
Copy code
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Solution Approach:

You can solve this problem iteratively using a queue to implement a 
breadth-first search (BFS).

Problem 2: Spiral Matrix
Description:

Given an m x n matrix, return all elements of the matrix in spiral order.

Example:

plaintext
Copy code
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Solution Approach:

You can solve this problem by keeping track of the current direction and 
boundaries of the matrix, which shrink as you iterate over the outer layers in 
a spiral fashion.

Problem 3: Set Matrix Zeroes
Description:

Given an m x n matrix. If an element is 0, set its entire row and column to 0. 
Do it in-place.

Example:

plaintext
Copy code
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Solution Approach:

Iterate over the matrix and use the first row and first column to store whether 
a row or column should be set to zero. This requires special handling for the 
first row and first column to avoid overwriting the flags.

Problem 4: Rotate Image
Description:

You are given an n x n 2D matrix representing an image, rotate the image by 90 
degrees (clockwise). You have to rotate the image in-place, which means you have
to modify the input 2D matrix directly.

Example:

plaintext
Copy code
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Solution Approach:

The rotation can be performed in layers, where you perform a cyclic swap of the 
edges on each layer.

Problem 5: Word Search
Description:

Given an m x n grid of characters board and a string word, return true if word 
exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where 
"adjacent" cells are horizontally or vertically neighboring. The same letter 
cell may not be used more than once.

Example:

plaintext
Copy code
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
word = "ABCCED"
Output: true
Solution Approach:

Use a depth-first search (DFS) starting from each cell. You'll need to keep 
track of the path you're currently on to avoid revisiting the same cell.

For each of these problems, the iterative solution typically involves either a 
direct traversal or the use of a data structure like a stack or queue to keep 
track of the elements to be processed. The time and space complexity will vary 
depending on the details of the problem and the specific implementation.




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
