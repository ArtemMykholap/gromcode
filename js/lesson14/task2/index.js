let message = 'Just learn it';
let sender = 'Gromcode';

const createMessenger = () => {
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


// const messenger = createMessenger();
// messenger.sendMessage('Bob');
// messenger.setMessage('Good job!');
// messenger.setSender('Barin')


// const messenger2 = createMessenger();
// messenger2.sendMessage('Tom');
// messenger2.setMessage('Good Job!')
// messenger2.setSender('Bond')

// const messenger3 = createMessenger();
// messenger3.sendMessage('Arny')
// messenger3.setSender('barin')