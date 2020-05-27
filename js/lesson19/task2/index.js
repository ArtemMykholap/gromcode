const vehicle = {

    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

const ship = {
    name: 'Argo',
    lastName: 'Argovich',
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

let keysArr = [];
for (let prop in ship) {
    if (ship.hasOwnProperty(prop) && typeof ship[prop] !== 'function') {
        keysArr.push(prop)
    }
}


//  console.log(keysArr)



export { getOwnProps }