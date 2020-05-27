//classes
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
        if (num < 0) { return false };
        this.age = num;
        if (num >= 25) {
            this.requestNewPhoto()
        }
        return num;


    }
    static createEmpty() {
        let newUser = new User('', null)
        return newUser;
    }
}
// const user1= new User('Tom',17);
console.log(User.createEmpty());


export { User }
// console.log(user1.createEmpty=[])
// createEmpty()