import java.util.ArrayList;

/*
 * @lc app=leetcode id=1389 lang=java
 *
 * [1389] Create Target Array in the Given Order
 */

// @lc code=start
class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        int[] target = new int[nums.length];
        ArrayList<Integer> targetArrayList = new ArrayList<>();
        for(int i = 0; i < nums.length; i++){
            targetArrayList.add(index[i],nums[i]);
        }
        for(int i = 0; i < nums.length; i++){
            target[i] = targetArrayList.get(i);
        }

        return target;
    }
}
// @lc code=end

