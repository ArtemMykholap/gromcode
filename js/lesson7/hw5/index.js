const clients = ['John', 'Mac', "Merry"];
const balances = [1000, 570, 700];
let client = 'Mac';
let amount = 100;


const withdraw = (clients, balances, client, amount) => {
    if (balances[clients.indexOf(client)] >= amount)
        return (balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount);
    return -1;
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6]))