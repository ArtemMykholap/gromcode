// algo
// 1. creare class and constructor with incoming data;
// 2. Create methods;
// 3. Check code
class Order {
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = String(Math.floor(Math.random(100) * 1000));
        this.dateCreated = new Date;
        this.dateConfirmed = Date;
        this.isConfirmed = false;

    }

    checkPrice(price) {
        if (price > 1000) {
            return true
        }
        return false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date;
    }
    isValidType(type) {
        if (this.type === 'Buy' || this.type === 'Sell') { return true };
        return false;
    }
}
// const order1 = new Order(1170, 'Kharkiv', 'Buy')
// const order2 = new Order(1100, 'Lviv', '')
// console.log(order1)
// console.log(order2)