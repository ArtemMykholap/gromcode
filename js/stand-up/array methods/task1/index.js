// function buildObject(keysList, valuesList) {

//     keysList.reduce((acc, key, index) => {
//         console.log('acc', acc);
//         console.log('index', index);

//         console.log('key', key);

//         let value = valuesList[index];


//         let obj = Object.assign(acc, {
//             [key]: value });
//         console.log('Obj', obj)

//         return obj;
//     }, {});
// }



function buildObject(keysList, valuesList) {

    return keysList.reduce((acc, key, index) => {

        return Object.assign(acc, {
            [key]: valuesList[index]
        });
    }, {});
}
let keys = ['name', 'city', 'price'];
let values = ['Denis', 'Lviv', 300];
console.log(buildObject(keys, values));

function buildObject(keysList, valueList) {
    return keysList.reduce((acc, key, index) => {
        return Object.assign(acc, {
            [key]: valueList[index]
        });
    });
}