// const randomInterval = (min, max) =>
//     Math.floor(min + Math.random() * (max + 1 - min))
// console.log(randomInterval(1, 3) * 1000);


const requestUserData = (userId, callback) => {
    const randomInterval = (min, max) =>
        Math.floor(min + Math.random() * (max + 1 - min));
    const random = randomInterval(1, 3) * 1000;
    if (userId === 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    setTimeout(() => callback({
        userId: userId,
        email: `${userId}@examle.com`,
    }), random);
};