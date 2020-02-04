/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(nums, target) {
    // use hash map to speed up the search
    let remainderMap = [];
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        const remainder = target - number;
        if (remainderMap[remainder] !== undefined) {
            return [remainderMap[remainder], i]
        }
        remainderMap[number] = i;
    }
    return [];
}

//Given 
nums = [2, 7, 11, 15]
target = 9

console.log(twoSum(nums, target)) // return [0, 1].