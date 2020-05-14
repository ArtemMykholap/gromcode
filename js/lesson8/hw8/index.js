const keysList = ['a', 'b', 'c'];
const valuesList = ['1', '2', '3'];

const buildObject = (keysList, valuesList) => {
    let obj = {};
    for (let i = 0; i < keysList.length; i++) {
        obj[keysList[i]] = valuesList[i];

    }
    return obj;
}
console.log(buildObject(keysList, valuesList));