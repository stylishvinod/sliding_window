

//https://leetcode.com/problems/max-consecutive-ones-ii/

var findMaxConsecutiveOnes = function(nums) {
    
    let totalZeros = 0;
    let start =0;
    let max = 0;
    
    for(let end = 0 ; end < nums.length; end++) {
       if(nums[end] === 0) {
           totalZeros++;
       }
        
        // Violation condition
        while(totalZeros > 1) {
            if(nums[start++] === 0) {
                totalZeros--;
            }
        }
        
        max = Math.max(max, end-start+1);
    }
    
    return max;
    
};