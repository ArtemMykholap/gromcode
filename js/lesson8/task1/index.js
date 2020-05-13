const arr = ['a', 17.1, 'John Doe'];
const thransformToObject = arr => {
    let obj = {};
    arr.forEach(el => obj[el] = el);
    return obj;
};


const result = transformToObject(arr);
console.log(result);