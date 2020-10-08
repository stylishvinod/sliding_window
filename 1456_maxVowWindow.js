
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    if(s.length < k) return 0;
    
    let set = new Set(['a', 'e', 'i', 'o', 'u']);
    
    let left = 0;
    let count = 0;
    let result = 0;
    
    // first pass iterate till k

    for(let right = 0 ; right < s.length; right++) {
        
        if(set.has(s[right])) {
            count++
        }
        
        if( right >= k-1) {
            result = Math.max(result, count);
            if(set.has(s[left])) {
                count--;
            }
            left++;
        }
        
    }
    
    return result;
};