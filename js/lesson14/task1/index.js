let message = 'Just learn it!';

export const sendMessage = (name) => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}\!. You ${sender}`);

}

// sendMessage('Ann');
export function setMessage(text) {
    message = text;
}


// sendMessage('Ann');
// setMessage('Hello');
// message = 'Good job!';
// sendMessage('Ann');