/* Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let i = -1;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === target) {
           i = j;
        } if(nums[j] > target){
            break;
        }
    }
    return i;
};