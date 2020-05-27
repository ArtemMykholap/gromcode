//Wallet
export class Wallet {
    _balance = 0

    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        return this._balance += amount;

    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds')
            return;
        }
        this._balance -= amount;
    }
}

// const wallet1 = new Wallet();
// wallet1.balance;
// console.log(wallet1.getBalance())
// wallet1.deposit(45)
// console.log(wallet1.getBalance())
// wallet1.withdraw(110)
// console.log(wallet1.getBalance())