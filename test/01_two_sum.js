const expect = require('expect');

/** 
        Given an array of integers, return indices of the two numbers such that they add up to a specific target.

        You may assume that each input would have exactly one solution, and you may not use the same element twice.

        Example:
        Given nums = [2, 7, 11, 15], target = 9,

        Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0, 1].
**/

describe('01. Two Sum', () => {
    it('return [0, 1]', () => {
        //arrange
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expected = [0, 1];
        //act
        const actual = twoSum_resolve2(nums, target);
        //assert
        expect(actual).toEqual(expected);
    });
});

//時間複雜度是O(n^2)，效率明顯不太好
var twoSum_resolve1 = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var n1 = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (target - n1 == nums[j]) {
                return [i, j];
            }
        }
    }
};


var twoSum_resolve2 = function (nums, target) {
    var obj = {},
        i = 0;
    for (; i < nums.length; i++) {
        var n1 = nums[i];
        if (obj[target - n1] >= 0) {
            return [obj[target - n1], i];
        } else {
            obj[n1] = i;
        }
    }
};