const createButton = buttonText => {
        const elem = document.createElement('button');
        elem.textContent = `${buttonText}`;
        const elementBody = document.querySelector('body');
        elementBody.append(elem)
    }
    // createButton('buttonText')
export { createButton }