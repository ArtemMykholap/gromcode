const createMessenger = () => {

    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}. Your ${sender}`);
    };

    function setMessage(text) {
        message = text;

        // console.log(text)
    };

    function setSender(text) {
        sender = text;
        // console.log(text)
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };
};
// export default createMessenger;


const messenger1 = createMessenger();
const messenger2 = createMessenger();
const messenger3 = createMessenger();

messenger1.sendMessage('1111')
messenger1.setMessage('1232131'); //не поменяет ничего,т.к. берет из изначально объявленной .

messenger2.setMessage('Good job!');
messenger2.sendMessage('Boob');

messenger3.setMessage('Good job!');
messenger3.setSender('Барин');
messenger3.sendMessage('Bob');
messenger3.setMessage('Good job!') //ниначто не повлияет,т.к. запрос вівода сообщения происходит раньше настройки мєссєдж.