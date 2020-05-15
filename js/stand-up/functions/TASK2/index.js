// изучить требования и построить алгоритм
// создать прототип решения
// протестировать
// финальное решение


// алгоритм
// 1. провести итерацию от 1 до Н
// 2. написать функцию которая проверяет простіе числа
// 3
// если число просто - печатать его
// input: Number
// output: boolean

// algo
// 1. iterate from 1 to num;
// 2. if num%i !==0;
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        // console.log('Check for: ' + i);
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



// input: Number
// output: undefined

// elgo
// 1. iterate from 1 to num;
// 2. wrute func that checks is number prime;
// 3.if number is prime-print it

function getPrimes(num) {
    for (let i = 1; i <= n; i++) {

        if (isPrime(i)) {
            console.log(i);
        }
    }
}