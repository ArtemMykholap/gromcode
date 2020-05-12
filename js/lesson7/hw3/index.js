// let arr = [1, 2, 3, 4, 5];
// let delta = 20;


// const increaseEvenEl = (arr, delta) => {
//     const arr = arr.map((even) => {
//             return even % 2 === 0
//                 // return even + delta;

//         })
//         // return arr;
//     console.log(arr);
// }
// console.log(arr);


var arr = [1, 2, 3, 4, 5, 6, 7, 8];
let delta = 20;


const increaseEvenEl = (arr, delta) => {

    // .filter((even) => {
    //     return even % 2 == 0;
    // })
    let star = arr.map((even) => {

        if (even % 2 == 0) {

            return even + delta;
        }
        return even;

    });
    return star;

}