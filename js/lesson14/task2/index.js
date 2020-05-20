const createMessenger = () => {

    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}. Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(text) {
        sender = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };
};
export default createMessenger;


const messenger = createMessenger();
const messenger2 = createMessenger();
const messenger3 = createMessenger();
// messenger.sendMessage('Bob');
// messenger.setMessage('Good job!');
// messenger.setSender('Barin')



// messenger2.sendMessage('Tom');
// messenger2.setMessage('Good Job!')
// messenger2.setSender('Bond');


// messenger3.sendMessage('Arny');
//   messenger3.setSender('barin')