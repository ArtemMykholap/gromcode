// function markAdmins(users, adminIds) {
//     users.map(user => {
//         let isAdmin = adminIds.includes(user.id);
//         return {...user, isAdmin }

//         // user.isAdmin=isAdmin
//     })

// }


function markAdmins(users, adminIds) {
    return users.map(user => {
        return {...user, isAdmin: adminIds.includes(user.id) }
    })

}


const adminIds = ['1', '3'];
const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' }
];
console.log(markAdmins(users, adminIds));