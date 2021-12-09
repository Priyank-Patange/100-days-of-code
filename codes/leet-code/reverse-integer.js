
/* Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Input: x = -123
Output: -321

Input: x = 120
Output: 21 */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

    if(x > 0 && x < 10) return x;
    let xStr = x < 0? x.toString().substr(1) : x.toString();
    let reversed = Number(xStr.split('').reverse().join(''));
    
    if( reversed < 0x7FFFFFFF) {
      return x < 0 ? -reversed : reversed;
    } else {
      return 0;
    }
};