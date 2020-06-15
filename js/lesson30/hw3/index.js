/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise
 */

const failedPromise = new Promise((resolve, reject) => {
    return reject(new Error('Oops, error!'))
        /* ...code here */
});
// console.log(failedPromise)

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
    console.log(error)
});