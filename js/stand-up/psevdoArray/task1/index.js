// let arr = [5, 6, 7, 10];
// console.log(...arr);


// for(let i=0; i<arr.length;i++) {
//   console.log(arr[i]);
// }


// function sum(a,b, ...args){
//   console.log(a);
//   console.log(b);
//   console.log(args);
// }

//task input number.nember..
//outputL number
// function multiply(...numbers){
//             return numbers.reduce((acc, el)=>acc*el)
// }
// console.log(multiply(123,123,123));


function multiply2() {
    let args = arguments;


    return [...args].reduce((acc, el) => acc * el)
}