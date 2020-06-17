class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`)
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }
    setAge(num) {
        // console.log(this)
        if (num < 0) { return false };

        this.age = num;

        if (num >= 25) {
            this.requestNewPhoto()
        }

        return num;
    }
}



const user1 = new User('Test', 40);
user1.setAge(25);
// //  console.log(user1);



// class Sportsman {
//     constructor(name) {
//         this.name = name;
//     }
//     run() {
//         console.log(`${this.name} is runing`)
//     }
// }

// class Swimmer extends Sportsman {
//     constructor(name, styleOfSwim) {
//         super(name);
//         this.styleOfSwim = styleOfSwim;
//     }
//     swim() {
//         console.log(`${this.name} is swimming ${this.styleOfSwim}`)
//     }
// }

// const swimmer = new Swimmer('John', 'breaststroke');
// console.log(swimmer.run())