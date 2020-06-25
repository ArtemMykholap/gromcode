// const fetchUser = async USERID => {
//     try {
//         const response = await fetch(`https://api.github.com/users/${USERID}`)
//             // console.log(response)
//         if (!response.ok) {
//             return null;
//         } else if (response.status === 404) {
//             return
//         }
//         const userData = await response.json();
//         return userData;
//     } catch (err) {
//         throw new Error('Failed to fetch user')
//     }
// };
// fetchUser('facebook')





export const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
            // console.log(response)
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error('Failed to fetch user')
    }
};
fetchUser('facebook')






// async function func() {
//     const promise = new Promise(resolve => {
//         setTimeout(() => {
//             resolve(17);
//         }, 1000);
//     })
//     const result = await promise;
//     console.log(result)
//     return 1
// }

// const result = func();