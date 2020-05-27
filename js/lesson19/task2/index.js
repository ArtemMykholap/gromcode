const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

const ship = {
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




function getOwnProps(obj) {
    return Object.keys(ship);

}
//    console.log( getOwnProps(ship))

export { getOwnProps }