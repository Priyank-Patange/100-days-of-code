/* Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa". */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    p = '^'+ p + '$';
    return new RegExp(p).test(s);
};