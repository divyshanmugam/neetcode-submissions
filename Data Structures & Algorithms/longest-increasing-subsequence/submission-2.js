class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /** Using DP bottom up  - https://www.youtube.com/watch?v=Xq3hlMvhrkE&t=1323s , https://www.youtube.com/watch?v=cjWnW0hdF1Y */
    lengthOfLIS(nums) {
        let n = nums.length;
        let dp = new Array(n).fill(-1);

        let dfs = (i) => {
            if(dp[i] !== -1) return dp[i];
            let LIS = 1;
            for(let j=i+1;j<n;j++) {
                if(nums[i] < nums[j]) LIS = Math.max(LIS,1+dfs(j))
            }
            dp[i] = LIS
            return LIS; 
        }
        return Math.max(...dp.map((_,i)=>dfs(i)));
    }
}
