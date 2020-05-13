const user = {
    name: 'Tom',
    age: 17,
};

function getKey(user) {
    let arr = Object.keys(user);
    return (arr.forEach(pomp => console.log(pomp)));
}
getKey(user);