export function arrAverage(nums) {
    if (!Array.isArray(nums)) return null;
    return nums.reduce((a, b) => (a + b)) / nums.length;
};
let numbers = [1, 2, 3, 4, 5];
console.log(arrAverage(numbers));