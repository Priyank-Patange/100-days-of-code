
/* Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0) return '';
  let prefix = '';
  let returnPre = '';
    for(let j = 0; j < strs[0].length; j++) {
      prefix +=strs[0][j];
      if(strs.every(word => word.startsWith(prefix) )) {
        returnPre = strs[0].substring(0, j+1 )
        
      }
    }
    return returnPre;  
};