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
let start = 0;
let finish = 10;

function getRandomNumbers(lengthArray, start, finish) {
    let newArr = [];

    for (let i = 0; i < lengthArray; i++) {
        start = Math.ceil(start);
        finish = Math.floor(finish);
        newArr.push(Math.floor(Math.random() * (finish - start) + start));
    }
    if (newArr.reduce((sum, current) => sum + current) === 0) {
        return null;
    }
    return newArr;

}
const result = getRandomNumbers(lengthArray, start, finish);
console.log(result);