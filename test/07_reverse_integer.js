const expect = require('expect');

/** 
    Reverse digits of an integer.
    Example1: x = 123, return 321 Example2: x = -123, return -321
    Have you thought about this? Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
    If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
    Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
    For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
**/

describe('07. Reverse Integer', () => {
    it('return x reverse', () => {
        //arrange
        const x = -923;
        const expected = -329;
        //act
        const actual = reverse(x);
        //assert
        expect(actual).toEqual(expected);
    });
    it('return 0', () => {
        //arrange
        const x = 1534236469;
        const expected = 0;
        //act
        const actual = reverse(x);
        //assert
        expect(actual).toEqual(expected);
    });
});

var reverse = function (x) {
    var INT_MAX = Math.pow(2, 31) - 1;
    if (x >= 0 && x < 10) return x;
    var strX = ('' + x).split(''),
        res = 0;
    res = strX[0] === '-' ? +(strX.reverse().join('').replace('-', '')) * -1 : +(strX.reverse().join(''))
    if (res > INT_MAX || res < -(1 + INT_MAX)) return 0;
    return res;
};