const clients = ['John', 'Mac', "Merry"];
const balances = [1000, 570, 700];
let client = 'Mac';
let amount = 2000;


function withdraw(clients, balances, client, amount) {
    let rest = 0;
    for (let i = 0; i < clients.length; i++) {


        if (clients[i] === client) {

            if (balances[i] < amount) {
                return -1;

            } else if (balances[i] > amount) {
                rest = balances[i] - amount;
                balances[i] = rest;
            }



        }

    }
    return rest;

}