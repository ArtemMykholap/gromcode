let numbers = [15, 27, 18, 24, 13];
let len = 3;


function getSubArray(numbers, len) {
    let sub = new Array(len);

    for (i = 0; i <= sub.length; i++) {

        sub.push(numbers[i]);
    }
    console.log(sub);

}