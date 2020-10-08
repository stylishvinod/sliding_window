

// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    let sum = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    
   let i = 0; let j = 0;
    
    while(j < nums.length) {
        sum += nums[j];
        
        while (sum >= s) {
            minLen = Math.min(minLen, j-i+1);
            sum -= nums[i];
            i++;
        }
        
        j++;
    }
    
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};