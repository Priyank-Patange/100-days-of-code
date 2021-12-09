
/* Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

/**
 * @param {string} s
 * @return {number}
 */
 const romanNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var compareValues = function(s, i) {
const curr = romanNum[s[i]];
const nextVal = romanNum[s[i+1]];
const a = curr < nextVal ? nextVal - curr : curr;
return [(curr < nextVal), a ]
}
var romanToInt = function(s) {
let final = 0;
for(let i = 0; i < s.length; i++) {
    const [isGreater, value] = compareValues(s, i);
    if(isGreater) {
        i++;
    }
    final += value;
}
return final;
};