let arr = [1, 2, 3, 4];

const squareArray1 = arr => {
    if (!Array.isArray(arr))
        return null;


    let res = []; //- good;


    //2 
    for (let el of arr) {
        // for (let i = 0; i < arr.length; i++) {
        res.push(el * el);
    }
    return res;
}




// let arr = [1, 2, 3, 4];

// const squareArray2 = arr => {
//     if (!Array.isArray(arr))
//         return null;




//     //2 

//     let res = [...arr];

//     for (let i = 0; i < arr.length; i++) {
//         res[i] = (arr[i] * arr[i]);
//     }
//     return res;
// }
// console.log(squareArray(arr));