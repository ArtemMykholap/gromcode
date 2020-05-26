// input object,string
// output object


function addPropertyV1(userData, userId) {

    userData.id = userId;
    return userData;


}


function addPropertyV2(userData, userId) {
    let obj = { id: userId }
    return Object.assign(userData, obj)


}

function addPropertyV3(userData, userId) {
    return Object.assign({}, userData, { id: userId })


}

function addPropertyV4(userData, userId) {
    // hoe to copy {...obj}
    let obj = {...userData, id: userId }
    return obj


}





let userData = {
    name: "ANdrey",
    city: "Lviv",
    age: 20,
};


let userId = "1111"
    // console.log(addPropertyV1(userData, userId))
console.log(addPropertyV2(userData, userId))