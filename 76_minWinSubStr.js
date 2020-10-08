// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map();
    for(const chr of t) {
        map.set(chr, map.has(chr) ? map.get(chr) + 1: 1);
    }
    let ans = [-1,-1,Number.MAX_SAFE_INTEGER];
    let start = 0;
    const n = s.length;
    let total = map.size;
    for (let end = 0; end < n; end++) {
        const chr = s[end];
        // if exist in map then reduce finding
        if(map.has(chr)) {
            map.set(chr, map.get(chr) - 1);
            if(map.get(chr) === 0) {
                total--;
            }
        }

        // if got an answer
        while(total === 0) {
            
            // shrink window
            const window = end - start + 1;
            
            if(window < ans[2]) {
                ans = [start, end, window];
            }
                        
            const key = s[start];
            if(map.has(key)) {
                map.set(key, map.get(key) + 1);
                if(map.get(key) === 1) {
                    total++;
                }
            }
            start++;
        }
    }
    return s.substring(ans[0], ans[1]+1);
};