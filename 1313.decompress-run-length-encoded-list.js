/*
 * @lc app=leetcode id=1313 lang=javascript
 *
 * [1313] Decompress Run-Length Encoded List
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let target = [];
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums[i]; j++){
            target[count] = nums[i+1];
            count++;
        }
        i++;
    }
    return target;
};
// @lc code=end

