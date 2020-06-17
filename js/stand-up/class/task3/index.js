export class Sportsman {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`)
    }
}
export class Swimmer extends Sportsman {
    constructor(name, styleOfSwim) {
        super(name);
        this.styleOfSwim = styleOfSwim;
    }
    swim() {
        console.log(`${this.name} is swimming ${this.styleOfSwim}`)
        super.run()
    }

}

const swimmer = new Swimmer('John', 'breaststroke');
console.log(swimmer.run())