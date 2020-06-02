// let a = 10;
// let b = 20;

// printer(a);
// sum(a,b);

// function printer(a) {
//     console.log(a);
// }
// const sum = (a, b) => {
//     console.log(a + b);
// // }
// function makeCounter() {

//     return function() {
//         let counter = 0;
//         counter++;
//         return counter

//     }
// }
// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


export const makeCounter = () => {

    let count = 0;

    return function() {
        return count++;
    }
};

const counter1 = makeCounter();
const counter2 = makeCounter();


// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());



// lexicalEnvironment = {
//     environmentRecord: {
//       <identifier> : <value>,
//       <identifier> : <value>
//     }
//     outer: < Reference to the parent lexical environment>
//   }