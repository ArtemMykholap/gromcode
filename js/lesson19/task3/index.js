//user

export function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function() {
    console.log(`Hi,I am ${this.name}`)
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was for ${this.name}`)
}
User.prototype.setAge = function(num) {
    if (num < 0) return false;
    this.age = num;
    if (num >= 25) {
        console.log(`New photo request was for ${this.name}`)
    }
    return this.age;

}


const user1 = new User('John', );
const user2 = new User('Bob', 27);

// console.log(user1);
// console.log(user2);
// user1.requestNewPhoto()
// user1.setAge(-22);
//  console.log(user1);

// user1.sayHi()
// user2.sayHi()

// console.log(user1.sayHi===user2.sayHi)