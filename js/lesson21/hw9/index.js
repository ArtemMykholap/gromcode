export const finishForm = () => {
        const changeAttribute = document.querySelector('input[type="text"]')
        changeAttribute.type = 'password'; //first type for change attribute
        const finishList = document.createElement('input');
        finishList.setAttribute('type', 'text'); //second type for change and add attributes
        finishList.setAttribute('name', 'login');
        const elementInput = document.querySelector('.login-form');
        elementInput.prepend(finishList);
    }
    // finishForm()