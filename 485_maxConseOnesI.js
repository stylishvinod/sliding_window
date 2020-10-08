// https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;
    let max = Number.MIN_SAFE_INTEGER;
    
    let start = 0;
    for (let end = 0; end < n; end++) {
        
        if(nums[end] === 1) {
            const window = end - start + 1;
            max = Math.max(max, window);
        } else {
            // shrink window
            start = end + 1;
        }
    }
    
    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
};