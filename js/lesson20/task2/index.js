export class Vehicle {
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels;
        this.name = name;

    }

    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};

export class Ship extends Vehicle {
    constructor(name) {
        super(name, false);
    }
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        super.move();

    }
    stopMachine() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);

    }
};
// const ship = new Ship('Argo');
// console.log(ship.startMachine());
// console.log(ship)

//   const ship=new Ship('Argo',18 );
//   console.log(ship.stopMachine());