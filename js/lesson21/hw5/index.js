const setButton = buttonText => {
        const elem = document.querySelector('body');
        return elem.innerHTML = `<button>${buttonText}</button>`

    }
    //   setButton('buttonText')
export {
    setButton
}