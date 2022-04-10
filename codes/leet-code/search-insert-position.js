
/* Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2

Output: 1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let i = 0
    if( target > nums[nums.length -1]){
       return nums.length
    }
    if(target < nums[0])
        return 0;
    for(let j= 0; j<nums.length; j++) {
        if(nums[j] === target) {
            i = j;
        } else if(target < nums[j+1] &&  target > nums[j]) {
            i =j+1
        }
    }
    return i
};