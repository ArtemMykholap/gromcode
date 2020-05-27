//classes
//classes
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi = function() {
        console.log(`Hi, I am ${this.name}`)
    }
    requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`)
    }
    setAge = function(num) {
        if (num < 0) { return false };
        this.age = num;
        if (num >= 25) {
            this.requestNewPhoto()
        }


    }
    static createEmpty() {
        this.name = [];
        this.age = null;
    }
}


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`)
// }
// User.prototype.requestNewPhoto = function() {
//     console.log(`New photo request was sent for ${this.name}`)
// }
// User.prototype.setAge = function(num) {
//     if (num < 0) { return false };
//     this.age = num;
//     if (num >= 25) {
//         this.requestNewPhoto()
//     }
//     return num;

// }


// const user1 = new User('John', 11);
// const user2 = new User('Bob', 27);