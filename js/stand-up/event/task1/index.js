const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');

const formElem = document.querySelector('form');


const handSubmit = event => {
    event.preventDefault();
    // console.log(event)
    const formData = new FormData(formElem)
    const formObj = Object.fromEntries(formElem)
    alert(JSON.stringify(formObj))
        //     .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
        // alert(JSON.stringify(formData));
}

const validateEmail = () => {
    console.log('validatePassword')
}

const validatePassword = () => {
    console.log('validatePassword')
}
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);




// const isRequired = value => value ?
//     undefined :
//     'Required';

// const isEmail = value => value.includes('@') ?
//     undefined :
//     'Should be an email';


// const validatorsByField = {
//     email: [isRequired, isEmail],
//     password: [isRequired]
// }


// const validate = (fieldName, value) => {
//     const validators = validatorsByField[fieldName];
//     return validators
//         .map(validator => validator(value))
//         .filter(errorText => errorText)
//         .join(', ');

// }



// const onEmailChange = event => {
//     const errorText = validate('email', event.target.value);
//     emailErrorElem.textContent = errorText;

// }
// const onPasswordChange = event => {
//     const errorText = validate('password', event.target.value)
//     passwordErrorElem.textContent = errorText;

// }

// emailInputElem.addEventListener('input', onEmailChange);
// passwordInputElem.addEventListener('input', onPasswordChange);

// const formElem = document.querySelector('.login-form');

// const onFormSubmit = event => {
//     event.preventDefault();
//     const formData = [...new FormData(formElem)]
//         .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
//     alert(JSON.stringify(formData));
// }

// formElem.addEventListener('submit', onFormSubmit);