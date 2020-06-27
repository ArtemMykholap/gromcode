export async function fetchFunc(request) {
    try {
        const result = await fetch(`https://api.github.com/users/${request}`)
        if (result.status === 200) {
            return result.json();
        }
    } catch (error) {
        console.log(error)

    }
}

export async function getUsersBlogs(userId) {
    try {
        const result = Promise.all(userId.map(userId => {
            fetchFunc(userId)
                .then(response => response.blog);
            return result

        }))
    } catch (error) {
        console.log(error)
    }

}
const userId = (['facebook', 'google', 'github']);
getUsersBlogs(userId)
    .then(requestList => console.log(requestList));