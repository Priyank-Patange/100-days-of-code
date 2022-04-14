/* TWO POINTER
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"] */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    if(!s || s.length <=1) return s;
    let start =0; end = s.length-1;
    while(start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end]= temp;
        start++;
        end--;
    }
    return s;
};