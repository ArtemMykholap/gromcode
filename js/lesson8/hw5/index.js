const obj = {
    name: 'Tom',
};
// key = 'music';
// value = 'rock';


const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};

const addPropertyV2 = (obj, key, value) => {
    const party = {
        [key]: value,
    };
    return Object.assign(obj, party);
}


const addPropertyV3 = (obj, key, value) => {
    const party = {
        [key]: value,
    };
    let objCopy = Object.assign({}, obj, party);
    return objCopy;
};

const addPropertyV4 = (obj, key, value) => {

    let objCopy = {
        [key]: value
    };

    return Object.assign({...obj }, objCopy);

};
const result = addPropertyV4(obj, 'literature', 'post-modern');
console.log(result);