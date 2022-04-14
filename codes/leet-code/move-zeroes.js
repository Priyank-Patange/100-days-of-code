/* TWO POINTERS ALGORITHM
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0] */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let j=0, i, n;
    for(i =0; i <nums.length; i++) {
        if(nums[i]!=0 && nums[j]==0) {
            n = nums[i];
            nums[i]=nums[j];
            nums[j] = n;
        }
        if(nums[j]!=0) {
            j+=1;
        }
    }
};