const fetchFunc = async request => {
    try {
        const result = await fetch(`https://api.github.com/users/${request}`);
        if (result.status === 200) {
            return result.json();
        }
        return result
    } catch (error) {
        console.log(error.message);
    }

}

export const getUsersBlogs = async usersId => {
    try {
        return Promise.all(usersId.map(response =>
            fetchFunc(response)
            .then(user => user.blog)

        ))

    } catch (error) {
        throw new Error("Failed");
    }

};

const userId = (['facebook', 'google', 'github']);
getUsersBlogs(userId)
    .then(response => console.log(response))