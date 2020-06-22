const baseUrl = 'https://5ef08099ad6d71001617a47b.mockapi.io/api/v1/form'

const loginFormElem = document.querySelector('.login-form');
const btnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const inputsElem = [...document.querySelectorAll('.form-input')];


function validation() {
    loginFormElem.reportValidity() ? btnElem.disabled = false : btnElem.disabled = true;
    errorElem.textContent = '';
}


loginFormElem.addEventListener("input", function() {
    loginFormElem.reportValidity() ? btnElem.disabled = false : btnElem.disabled = false;
    errorElem.textContent = '';
})


loginFormElem.addEventListener("submit", function(event) {
    // console.log(loginFormElem)

    event.preventDefault();
    const formData = new FormData(loginFormElem);
    // console.log(formData)

    fetch(baseUrl, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            inputsElem.map(elem => elem.value = '');
            btnElem.disabled = true;
            alert(JSON.stringify(result))
        })

    .catch(() => errorElem.textContent = 'Failled to create user')

});