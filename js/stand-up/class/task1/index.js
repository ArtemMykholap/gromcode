function User(name, age) {

    // let user = {};
    // Object.assign(user, { name });
    // Object.assign(user, { age });
    // return user;
    this.name = name;
    this.age = age;
}
// console.log(new User('Test', 50))

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`)
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`)
}
User.prototype.setAge = function(num) {
    // console.log(this)
    if (num < 0) { return false };
    this.age = num;
    if (num >= 25) {
        this.requestNewPhoto()
    }
    return num;

}


const user1 = new User('Test', 40);
user1.setAge(25);
// //  console.log(user1);