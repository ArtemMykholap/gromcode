const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';

function getUserData(userId) {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    then(response => {
        if (!response.ok) {
            throw new Error('Can not find a user');
        }
        return response.json();
    });
}

async function printUserData(userId) {
    const user = await getUserData(userId)


}

printUserData(10)

// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockap.io/api/v1';

// export async function getUserData(userId) {
//     try {
//         const request = await fetch(`${baseUrl}/users/${userId}`);
//         const response = await request;
//         return response.json()
//     } catch (error) {
//         throw new Error('Can not find a user');

//     }
// }


// export async function printUserData(userId) {
//     try {
//         const response = getUserData(userId);
//         let request = await response;
//         console.log(request)
//     } catch (error) {
//         console.log(error.message)
//     }

// }