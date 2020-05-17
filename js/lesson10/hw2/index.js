//input:numbers
//output:random array

//создать новый массив;
// создать цикл где указываем,что кол-во итераций-равно длине массива;
// описать условие округления,что если число положительное-используем Math.floor, если отрицательное Math.ceil;
//добавляем элементы в массив получченные из ГСЧ в заданном промежутке;
// если в промежутке нет целых чисел, значит массив пустой-вернуть null
// вернуть заполненный массив;
// 
let lengthArray = 5;
let start = -4.1;
let finish = -5;

function getRandomNumbers(lengthArray, start, finish) {
    if (Math.abs(start - finish) < 1) {
        return null;
    }
    let newArr = [];
    start = Math.ceil(start);
    finish = Math.floor(finish);
    for (let i = 0; i < lengthArray; i++) {
        newArr.push(Math.floor(Math.random() * (finish - start) + start));
    }
    return newArr;
}
const result = getRandomNumbers(lengthArray, start, finish);
console.log(result);




// if (newArr.reduce((sum, current) => sum + current) === 0) {
//     return null;
// // }