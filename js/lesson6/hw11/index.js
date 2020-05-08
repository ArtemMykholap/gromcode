let numbers = [15, 27, 18, 24, 13];
let len = 3;


function includes(numbers, len) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === len) {
            console.log(true);
        }
        console.log(false);
    }

}