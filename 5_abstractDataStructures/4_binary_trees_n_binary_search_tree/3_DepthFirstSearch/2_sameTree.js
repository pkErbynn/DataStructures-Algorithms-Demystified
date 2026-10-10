TODO:
- REVIEW RECURRSSION IMPL
- IMPL ITERATIVELY

/*

Same Tree Game Problem 100 - https://leetcode.com/problems/same-tree/description/

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
       1
     /   \
   2       3

       1
     /   \
   2       3

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
      1
     / 
   2     

    1
       \
        2

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
       1
     /   \
   2       1

       1
     /   \
   1       2

Input: p = [1,2,1], q = [1,1,2]
Output: false

My thoughts:
- DFS cus it touches nodes deeply so if one leg of the two trees fail to match, then the entire match fails
- !BFS cus it will do level/surface by face and if it fails one level then means it had wasted time doing all prev level
- Match by structure + by value
*/


// REMEMBER: A Tree Node has: 
// 1. value and 
// 2. nullable left n right nodes by default
class TreeNode {
    constructor(value){
        this.value = null;
        this.left = null;
        this.right = null;
    }
}


// Recursion since dfs
function sameTree_recursion(nodeFromTree1, nodeFromTree2){

    function areBalanced(nodeFromTree1, nodeFromTree2){

        // Empty trees are same
        if(nodeFromTree1 == null & nodeFromTree2 == null){      // (!nodeFromTree1 & !nodeFromTree2) => read as "nodeFromTree1 exists and nodeFromTree2 exists"
            return true;
        }

        // Tree1Node exist but Tree2Node does not exist...or vice versa...then means they're not same
        if( (nodeFromTree1 != null & nodeFromTree2 == null) || (nodeFromTree1 == null & nodeFromTree2 != null) ){       // (nodeFromTree1 & !nodeFromTree2) || (!nodeFromTree1 & nodeFromTree2) )
            return false;
        }

        // Both Tree1Node and Tree2Node exist but have different values...then mean they're not same
        if(nodeFromTree1.value != nodeFromTree2.value){
            return false;
        }

        let balance = areBalanced(nodeFromTree1.left, nodeFromTree2.left) && areBalanced(nodeFromTree1.right, nodeFromTree2.right)
        return balance;
    }

    areBalanced(nodeFromTree1, nodeFromTree2)
}
