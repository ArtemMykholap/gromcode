let numbers = [15, 27, 18, 24, 13];
let len = 3;


function getSubArray(numbers, len) {
    let sub = [];

    for (let i = 0; i <= len - 1; i++) {

        sub.push(numbers[i]);
    }
    return sub;

}