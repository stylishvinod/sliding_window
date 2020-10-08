// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let map = new Map();
    let start = 0;
    let max = 0;
    let dist = 0;
    
    
    for(let i = 0 ; i < s.length; i++) {
        
      map.set(s[i], (map.get(s[i]) || 0) +1)
        
        while(map.size > k) {
            let count = map.get(s[start]);
            
            if( count-1 === 0) {
                map.delete(s[start])
            } else {
                map.set(s[start], count-1);
            }
            
            start++;
        }
        
        max = Math.max(max, i-start+1);
    }
    
    return max;
};