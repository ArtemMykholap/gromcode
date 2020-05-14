const obj1 = {
    name: 'Tom',
    student: true,

};
const obj2 = {
    name: 'Bob',
    age: 77,
};
// key = 'music';
// value = 'rock';



const mergeObjectsV1 = (obj1, obj2) => {
    let newObj = Object.assign({}, obj1, obj2);
    return newObj;
};

const mergeObjectsV2 = (obj1, obj2) => {
    let newObj = Object.assign({}, obj2, obj1);
    return newObj;
};
const mergeObjectsV3 = (obj1, obj2) => {
    let newObj = Object.assign({...obj1 }, {...obj2 })
    return newObj;
}
const mergeObjectsV4 = (obj1, obj2) => {
    let newObj = Object.assign({...obj2 }, {...obj1 })
    return newObj;
}
const result = mergeObjectsV4(obj1, obj2);
console.log(result);