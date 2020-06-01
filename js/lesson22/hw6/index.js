const elem = document.querySelectorAll('.btn')
const handleClick = () => {
    console.log(event.target.textContent)
};
[...elem].map(el => el.addEventListener('click', handleClick));