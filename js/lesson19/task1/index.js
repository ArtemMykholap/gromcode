export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${name} is moving`);
    },
    stop() {
        console.log(`${name} stopped`);
    }

}

export const ship = {
    startMachine() {
        console.log(`${name} lifting anchor up`);
        this.move();

    },
    stopMachine() {
        console.log(`${name} lifting anchor down`);
        this.stop();
    },
    __proto__: vehicle,
}
ship.startMachine()
ship.stopMachine()