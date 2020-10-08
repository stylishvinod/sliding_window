
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let ans = 0;
    const map = new Map();
    let start = 0;
    for (let end = 0; end < n; end++) {
        const chr = s[end];
        // handle voilation first
        if(map.has(chr)) {
            // voilation, shrink window size
            const index = map.get(chr);  
            while(start <= index) {
                const key = s[start];
                map.delete(key);
                start++;
            }
        }    
        map.set(chr, end);
        // update gloabl answer
        ans = Math.max(ans, end - start + 1);
    }
    return ans;
};