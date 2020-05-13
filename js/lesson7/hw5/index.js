const clients = ['John', 'Mac', "Merry"];
const balances = [1000, 570, 700];
let client = 'Mac';
let amount = 100;


const withdraw = (clients, balances, client, amount) => {

        const rest
        let rest = 0;
        for (let i = 0; i < clients.length; i++) {


            if (clients[i] === client) {

                if (balances[i] < amount) {
                    return -1;

                } else if (balances[i] > amount) {
                    rest = balances[i] - amount;
                    balances[i] = rest;
                }


                // if (
                //     balances.indexof(clients.find(client = client)) < amount) {
                //     return -1;
                // }
                // const rest = balances.indexof(clients.find(clients[i] = client)) - amount;
                // return rest;

            }