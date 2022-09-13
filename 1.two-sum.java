import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode id=1 lang=java
 *
 * [1] Two Sum
 */

// @lc code=start
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i<nums.length; i++){
            map.put(nums[i], i);
        }
        
        for(int j = 0; j < nums.length; j++){
            int complete = target - nums[j];
            if(map.containsKey(complete) && map.get(complete) != j){
                return new int[]{j,map.get(complete)};
            }
        }
        return null;
    }
}
// @lc code=end

