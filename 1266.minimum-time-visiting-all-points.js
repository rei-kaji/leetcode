/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    if (points.length < 2) return 0;
  
    let time = 0;
    
    for (let i = 1; i < points.length; i++) {
      const x = Math.abs(points[i - 1][0] - points[i][0]);
      const y = Math.abs(points[i - 1][1] - points[i][1]);
   
      time += Math.max(x, y);
    }
    return time;
};
// @lc code=end

