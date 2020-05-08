let numbers = [15, 27, 18, 24, 13];
let len = 1;


function includes(numbers, len) {
    let a = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === len) {
            a += 1;
        }
        console.log(a > 0);
    }


}