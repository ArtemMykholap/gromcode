const jsonString = '{"name":"Bo"';

// console.log(jsonString)
// console.log(typeof jsonString)

function parseUser(jsonString) {
    let result;
    try {
        result = JSON.parse(jsonString);

    } catch (err) {
        throw new Error('Null')
    };


    return result
}
console.log(parseUser(jsonString))


// function readUser(json) {
//     let user;

//     try {
//         user = JSON.parse(json);
//     } catch (err) {
//         if (err instanceof SyntaxError) {
//             throw new ReadError("Синтаксическая ошибка", err);
//         } else {
//             throw err;
//         }
//     }