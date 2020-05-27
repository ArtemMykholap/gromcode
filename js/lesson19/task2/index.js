const vehicle = {

    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};


const user = {
    name: 'A',
    nick: 'B',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();

    },
}


const ship = {
    name: 'Argo',
    lastName: 'Argovich',
    fiName: 'Argovich',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();

    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
        ship.stop();
    },
    __proto__: vehicle,
}




function getOwnProps(ship) {
    let keysArr = [];
    for (let prop in ship) {
        if (ship.hasOwnProperty(prop) && typeof ship[prop] !== 'function') {
            keysArr.push(prop);

        }

    }
    return keysArr
}



// function getOwnProps(ship) {
//     // console.log(ship)
//     let keysArr = [];
//     for (let prop in ship) {
//         // console.log(keysArr)
//         if (ship.hasOwnProperty(prop) && typeof ship[prop] !== 'function') {
//             //  console.log(keysArr)
//             keysArr.push(prop);


//             //  console.log(keysArr)

//         }

//     }
//     return keysArr
// }


// console.log(getOwnProps(user))




//  console.log(keysArr)



//  console.log(keysArr)



export { getOwnProps }