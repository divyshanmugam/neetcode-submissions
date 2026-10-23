class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /** Using DP bottom up  - https://www.youtube.com/watch?v=Xq3hlMvhrkE&t=1323s , https://www.youtube.com/watch?v=cjWnW0hdF1Y */
    lengthOfLIS(nums) {
        let dp = new Array(nums.length).fill(1);
        for(let i = nums.length -1;i>-1;i--) {
            for(let j=i+1;j<nums.length;j++) {
                if(nums[i] < nums[j]) dp[i] = Math.max(dp[i],1+dp[j])
            }
        }
        return Math.max(...dp);
    }
}
