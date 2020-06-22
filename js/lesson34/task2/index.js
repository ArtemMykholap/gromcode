const baseUrl = 'https://5ef08099ad6d71001617a47b.mockapi.io/api/v1/users';
export const getUsersList = () =>
    fetch(baseUrl).then(response => response.json())



export const getUserById = userId =>
    fetch(`${baseUrl}/${userId}`)
    .then(response => response.json())

export const createUser = obj => {
    return fetch(baseUrl, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),

    })
};


export const updateUser = (obj, userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),

    })
};

export const deleteUser = id => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
}