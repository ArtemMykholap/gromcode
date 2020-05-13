const userData = {
    name: 'Tom',
    age: 17,
};

userId = '11111';

const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}

const addPropertyV2 = (userData, userId) => {
    const party = { id: userId, };
    return Object.assign(userData, party);

}

const addPropertyV3 = (userData, userId) => {
    userData.id = userId;
    let userDataCopy = Object.assign({}, userData)
    return userDataCopy;
}

const addPropertyV4 = (userData, userId) => {

    let userDataCopy = {...userData };
    userDataCopy.id = userId;
    let userDataNew = {...userData, ...userDataCopy };
    return userDataNew;
}
const result = addPropertyV4(userData, '12345');
console.log(result);