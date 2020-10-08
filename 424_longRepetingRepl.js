// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = new Map();
    let maxOccurence = 0;
    let start = 0;
    let result = 0

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)

        maxOccurence = Math.max(maxOccurence, map.get(s[i]));

        // violation condition
        while (i - start + 1 - maxOccurence > k) {
            map.set(s[start], map.get(s[start]) - 1);
            start++;
        }

        result = Math.max(result, i - start + 1)

    }

    return result;
};