class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    /** Using binary search - https://www.youtube.com/watch?v=on2hvxBXJH4 */
    lengthOfLIS(nums) {
        let sub =[];

        for(let i=0;i<nums.length;i++) {
            let left = 0, right = sub.length;
            
            while(left < right) {
                let mid = Math.floor((left+right)/2);
                if(sub[mid] < nums[i]) left = mid+1;
                else right = mid;
            }
            sub[left] = nums[i];
        }
        return sub.length;
    }
}
