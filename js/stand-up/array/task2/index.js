// начальный массив
const numbersList = [1, 2, 3, 4, 5];


/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */


/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достаньте последний элемент массива и поместите его в переменную lastNumber
// выведите эту переменную в консоль
console.log('befor' + numbersList);
let res1 = numbersList.pop();
console.log(res1);
console.log('after' + numbersList);


// ... code here


/* push - добавит элемент в конец массива */

// c помощью метода push добавьте число 6 в конец массива
// выведите numbersList в консоль
console.log('befor' + numbersList);
let res3 = numbersList.push(11);
console.log(res3);
console.log('after' + numbersList);
// ... code here


/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достаньте первый элемент массива и поместите его в переменную firstNumber
// выведите эту переменную в консоль
console.log('befor' + numbersList);
let res4 = numbersList.shift(1);
console.log(res4);
console.log('after' + numbersList);
// ... code here


/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавьте число 0 в начало массива
// выведите numbersList в консоль
console.log('befor' + numbersList);
let res5 = numbersList.unshift(100);
console.log(res5);
console.log('after' + numbersList);
// ... code here



/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */


/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* элементы массива newArr - это результат вызова callback для каждого элемента arr */
/* newArr[i] = callback(arr[i]) */

// c помощью метода map создайте новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведите squaredNumbers в консоль

const numbersList1 = [1, 2, 3, 4, 5];

// console.log('before' + numbersList);
// let callback = function(element) {
//         return element * element;

//     }
// console.log(squaredNumbers(numberList1))
// const squaredNumbers = numbersList.map(callback);
// console.log(squaredNumbers);
// ... code here
const squaredNumbers = numbersList1.map(el => el * el);
console.log(squaredNumbers);


/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true */
/* callback(arr[i]) === true -> элемент будет добавлен в финальный массив  */
/* callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив  */

// c помощью метода filter создайте новый массив evenNumbers, в котором только четные числа из numbersList
// выведите evenNumbers в консоль

const numbersList1 = [1, 2, 3, 4, 5];
console.log('before' + numbersList1);
// let callback = function() {
//     if (el > 100) {
//         return true;
//     } else
//         return false;
// }
const filtered = numbersList1.filter((el) => el > 2);
console.log('After' + filtered);



// ... code here


/* метод find */
/* const arrElement = arr.filter(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* если callback(arr[i]) вернет true, то filter прекратит поиск и вернет этот элемент */

// c помощью метода find найдите первое нечетное число в numbersList и выведите его в консоль

// ... code here




//forEach