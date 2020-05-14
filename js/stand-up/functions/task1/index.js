/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
// ... code here
function getSenseOfLife() {
    return 42;
}
// input:Number
// output:number
function getSquared(num) {
    return num * num;
}

// input:Number
// output:number
function sum(num1, num2) {
    return num1 + num2;
}

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */
// ... code here
// input:Number
// output:undefind
function printAge(a) {
    console.log('I am' + a + 'years old');
}

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
// ... code her
let mult = (a, b) => a * b;


/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
// ... code here
let square = num => num * num;
console.log('hello');


//  * ф-ция getMagicNumber должна вернуть число 17
//  */
// ... code here
let getMagicNumber = () => 17;