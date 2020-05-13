const userData = {
    name: 'Tom',
};


const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
};

const addPropertyV2 = (userData, userId) => {
    const party = { id: userId, };
    return Object.assign(userData, party);

};

const addPropertyV3 = (userData, userId) => {
    const party = { id: userId, };
    let userDataCopy = Object.assign({}, userData, party);
    return userDataCopy;
};

const addPropertyV4 = (userData, userId) => {

    let userDataCopy = { id: userId };

    return Object.assign({...userData }, userDataCopy);

};
const result = addPropertyV4(userData, '43434343');
console.log(result);