let obj1 = {
    name: "ANdrey",
    city: "Lviv",
    age: 20,
};
let obj2 = {
    name: "Denis",
    city: "Lviv",
    phone: 123,
    age: 20,
};




// console.log(addPropertyV1(userData, userId))
console.log(mergeObjectsV1(obj1, obj2))


function mergeObjectsV1(obj1, obj2) {
    return Object.assign(obj1, obj2)

}


function mergeObjectsV2(obj1, obj2) {
    return Object.assign(obj1, obj2)

}


function mergeObjectsV3(obj1, obj2) {
    let resObj = {...obj1, ...obj2 }
    return resObj
}
console.log(mergeObjectsV3(obj1, obj2))



// console.log(addPropertyV1(userData, userId))
console.log(mergeObjectsV1(obj1, obj2))