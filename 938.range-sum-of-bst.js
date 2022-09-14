/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let result = 0
    dfs(root);
    return result;
    
    function dfs(root) {
        if(root == null) {
            return;
        }
        if(root.val >= L && root.val <= R) {
            result += root.val;
        }
        if(root.val == L) {
            dfs(root.right);
        } else if(root.val == R) {
            dfs(root.left);
        } else {
            dfs(root.left);
            dfs(root.right);
        }     
    }
};
// @lc code=end
