localStorage.clear()
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));
// localStorage.getItem('name')

export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            return {
                ...acc,
                [key]: JSON.parse(value),
            };
        }, {});
}
console.log(getLocalStorageData())
    // for(let i=0;i<localStorage.length; i++){
    //     localStorage.key(i)