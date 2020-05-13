const arr = ['a', 17.1, 'text', ];
const thransformToObject = arr => {
    let obj = {};
    arr.forEach(el => {

        obj[el] = el;
    });

    return obj;
};
// console.log(thransformToObject(arr));