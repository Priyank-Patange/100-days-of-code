
/* TWO POINTERS 
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    if(!nums || nums.length == 0) return [];
    let i = 0, j=nums.length;
    while( i<j) {
        if(nums[i]+nums[j] == target) {
            return [i+1, j +1];
        }
        else if(nums[i] + nums[j] < target) {
            i++
        } else {
            j--
        }
    }
};