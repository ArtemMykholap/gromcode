const elem = document.querySelectorAll('.pagination__page');
const handleClick = () => {
    console.log(event.target.dataset.pageNumber);
};
[...elem].map(el => el.addEventListener('click', handleClick));