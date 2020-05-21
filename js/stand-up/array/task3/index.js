//input array,function
//output array

//algo
// 1.copy array
// 2.iterate array
// 3.if callback condition ok - add to array, if not - skip




function filterArrayElements(arr, callback) {

    let filtered = [];

    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i, arr);
        if (res) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
let callback = (el) => el % 2 === 0;
let res = filterArrayElements(numbers, callback);
console.log(res);





//input array,function
//output array

//algo
// 1.copy array
// 2.iterate array
// 3.call callback for every element and add result to array;

function mapArrayElements(arr, callback) {

    let mapped = [];

    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i, arr);
        mapped.push(res);

    }

    return mapped;
}

const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
let callback = (el) => el * 2;
let res = filterArrayElements(numbers, callback);
console.log(res);



function mapArrayElements(arr, callback) {

    let mapped = [];

    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i, arr);
        mapped.push(res);

    }

    return mapped;
}

const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
let callback = (el) => el * 2;
let res = mapArrayElements(numbers, callback);
console.log(res);




/*sort*/
const numbers1 = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
numbers1.sort((el1, el2) => el1 - el2);
console.log(numbers1.sort((el1, el2) => el1 - el2));
//>0 ,el1>el2
// ===0, el1===el2
// <0,el2<el1


const text = ['test1', 'test2', 'test3', 'test4'];
// numbers1.sort((el1, el2) => el1 - el2);
console.log(numbers2.sort((a, b) => a.localeCompare(b)));