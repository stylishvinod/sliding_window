// https://leetcode.com/problems/max-consecutive-ones-iii/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    
    let start = 0;
    let max = 0;
    let onesCount = 0;
    
    for(let i = 0 ; i< A.length; i++) {
        if(A[i] === 0) {
            onesCount++;
        }
        
        // Voilation condition
        
        while(onesCount > K) {
            if(A[start++] === 0) {
                onesCount--;
            }
        }
        // calculate max count
        max = Math.max(max, i-start+1);
    }
    
    return max;
    
};