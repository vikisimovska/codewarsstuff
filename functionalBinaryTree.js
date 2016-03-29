function BinaryTree() {};

function BinaryTreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
  Object.freeze(this);
}
BinaryTreeNode.prototype = new BinaryTree();
BinaryTreeNode.prototype.constructor = BinaryTreeNode;

BinaryTreeNode.prototype.isEmpty = function() { /* implement this */ };
BinaryTreeNode.prototype.depth = function() { /* implement this */ };
BinaryTreeNode.prototype.count = function() { /* implement this */ };

BinaryTreeNode.prototype.inorder = function(fn) { /* implement this */ };
BinaryTreeNode.prototype.preorder = function(fn) { /* implement this */ };
BinaryTreeNode.prototype.postorder = function(fn) { /* implement this */ };

BinaryTreeNode.prototype.contains = function(x) { /* implement this */ };
BinaryTreeNode.prototype.insert = function(x) { /* implement this */ };
BinaryTreeNode.prototype.remove = function(x) { /* implement this */ };

////////////////////////////////////////////////////////////////////////
function EmptyBinaryTree() { Object.freeze(this); }
EmptyBinaryTree.prototype = new BinaryTree();
EmptyBinaryTree.prototype.constructor = EmptyBinaryTree;

EmptyBinaryTree.prototype.isEmpty = function() { /* implement this */ };
EmptyBinaryTree.prototype.depth = function() { /* implement this */ };
EmptyBinaryTree.prototype.count = function() { /* implement this */ };

EmptyBinaryTree.prototype.inorder = function(fn) { /* implement this */ };
EmptyBinaryTree.prototype.preorder = function(fn) { /* implement this */ };
EmptyBinaryTree.prototype.postorder = function(fn) { /* implement this */ };

EmptyBinaryTree.prototype.contains = function(x) { /* implement this */ };
EmptyBinaryTree.prototype.insert = function(x) { /* implement this */ };
EmptyBinaryTree.prototype.remove = function(x) { /* implement this */ };