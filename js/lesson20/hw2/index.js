// create two classes
// create the necessary fields in the user class
// using getters close access to fields for adjustments
// create a user repository class.
// constructor in it // by this.user we impose Object.freeze to block the mutation of the array
// create methods for constructing an array of names and an idy array
// create a name search method by id


export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }

}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return Object.values(this._users).flat().map(object => object.name);
    }

    getUserIds() {
        return Object.values(this._users).flat().map(object => object.id);
    }

    getUserNameById(num) {
        return this.users.find(user => user.id === num).name;
    }

}

// const user1 = new User('11.22.11', 'Jesus', '11');
// const user2 = new User('11.22.12', 'Khain', '33');
// const user3 = new User('11.22.13', 'Avel', '44');
// const userRep1 = new UserRepository([user1, user2, user3]);
// // console.log(Object.values(userRep1).flat())
// userRep1.getUserNames()
// userRep1.getUserIds()
// userRep1.getUserNameById('11.22.13')
// userRep1.getUserNameById('11.22.11')
//     // userRep1.getUserIds([user1,user2,user3])
//     //
//     // 
//     // user1._name='Mitya';
//     // console.log(user1);
//     // console.log(user2);
//     // console.log(user3);
//     // console.log(User.userBox(user1,user2,user3))