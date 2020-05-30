export const finishList = () => {
    const elementLi1 = document.createElement('li'); //create element
    const elementLi4 = document.createElement('li');
    const elementLi6 = document.createElement('li');
    const elementLi8 = document.createElement('li');

    elementLi1.textContent = '1'; //add text
    elementLi4.textContent = '4';
    elementLi6.textContent = '6';
    elementLi8.textContent = '8';

    const elementList = document.querySelector('.list'); //search element

    elementList.prepend(elementLi1) //add element
    elementList.append(elementLi8)

    const elementSpecialList = document.querySelector('.special');
    elementSpecialList.before(elementLi4)
    elementSpecialList.after(elementLi6)
};
// finishList()