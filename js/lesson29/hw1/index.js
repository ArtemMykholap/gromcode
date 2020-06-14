// const randomInterval = (min, max) =>
//     Math.floor(min + Math.random() * (max + 1 - min))
// console.log(randomInterval(1, 3) * 1000);


export const requestUserData = (userId, callback) => {

    if (userId === 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    setTimeout(() => callback({
        userId: userId,
        email: `${userId}@examle.com`,
    }), Math.ceil(Math.random() * 3000));
};