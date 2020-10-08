

// https://leetcode.com/problems/subarrays-with-k-different-integers/

const subarraysWithAmostKDistinct = (A, K) => {
    const n = A.length;
    const map = new Map(); 
    let startWindow = 0;
    let total = 0;
    for (let endWindow =0; endWindow < n; endWindow++) {
        const num = A[endWindow];
        if(!map.has(num)) {
            map.set(num, 0);
        }
        map.set(num, map.get(num) + 1);
        
        // if voilates
        while(startWindow < n && map.size > K) {
            const lastNum = A[startWindow];
            map.set(lastNum, map.get(lastNum) -1 );
            if(map.get(lastNum) === 0) {
                map.delete(lastNum);
            }
            startWindow++;
        }
        total += endWindow - startWindow + 1;        
    }
    return total;
}
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    return subarraysWithAmostKDistinct(A, K) - subarraysWithAmostKDistinct(A, K-1);
};