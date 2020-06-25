const spinnerELem = document.querySelector('.spinner');



export const showSpinner = () => {
    spinnerELem.classList.remove('spinner_hidden');
}
export const hideSpinner = () => {
    spinnerELem.classList.add('spinner_hidden');
}