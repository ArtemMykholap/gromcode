// const randomInterval = (min, max) =>
//     Math.floor(min + Math.random() * (max + 1 - min))
// console.log(randomInterval(1, 3) * 1000);



const requestUserData = (userId, callback) => {
    // console.log(callback)
    // console.log(userId)
    if (userId === 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    const randomInterval = (min, max) =>
        Math.floor(min + Math.random() * (max + 1 - min));
    const random = randomInterval(1, 3) * 1000;

    setTimeout(() => callback({
        userId: userId,
        email: `${userId}@examle.com`,
    }), random)
};
export { requestUserData }