/* Input: s = "4193 with words"
Output: 4193

Input: s = "-91283472332"
Output: -2147483648
Since -91283472332 is less than the lower bound of the range [-231, 231 - 1], the final result is clamped to -231 = -2147483648. */

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    s = parseInt(s.trimStart().split(' ')[0]);
   if(!s || !(/^[+|-]?[0-9]/i.test(s))) return 0;

   
   if (s < (Math.pow(2, 31) * -1)) return (Math.pow(2, 31) * -1);
   if(s > Math.pow(2,31) - 1) return (Math.pow(2,31) - 1);
    return s;
};