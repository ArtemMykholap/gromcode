const user = {
    name: 'Tom',
    age: 17,
};

function getKeys(user) {
    let arr = Object.keys(user);
    return (arr.forEach(pomp => console.log(pomp)));
}
getKeys(user);