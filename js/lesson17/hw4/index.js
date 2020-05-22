export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(separate) {
        let inf = separate.split(' ');
        // console.log(inf)
        this.firstName = inf[0];
        this.lastName = inf[1];
        // console.log(this.lastName)  
    },
}