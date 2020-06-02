const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const btnClear = document.querySelector('.clear-btn');
const btnRemove = document.querySelector('.remove-handlers-btn');
const btnAttach = document.querySelector('.attach-handlers-btn');



const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');

    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px"> ${text} </span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green')
const logGreenP = logTarget.bind(null, 'P', 'green')
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green')

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey')
const logGreyP = logTarget.bind(null, 'P', 'grey')
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey')


const eventListClear = () => { document.querySelector('.events-list').innerHTML = '' }
btnClear.addEventListener('click', eventListClear)



const removeHandlers = () => {
    divElem.removeEventListener('click', logGreyDiv, { capture: true });
    pElem.removeEventListener('click', logGreyP, true);
    spanElem.removeEventListener('click', logGreySpan, true);
    divElem.removeEventListener('click', logGreenDiv);
    pElem.removeEventListener('click', logGreenP);
    spanElem.removeEventListener('click', logGreenSpan);
}
btnRemove.addEventListener('click', removeHandlers)



const attachHandlers = () => {
    divElem.addEventListener('click', logGreyDiv, { capture: true });
    pElem.addEventListener('click', logGreyP, true);
    spanElem.addEventListener('click', logGreySpan, true);
    divElem.addEventListener('click', logGreenDiv);
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreenSpan);
}

btnAttach.addEventListener('click', attachHandlers)
attachHandlers()






// elem.addEventListener('click', () => {
//     console.log('div');
// });

// elem.addEventListener('click', () => {
//     console.log('div1');
// });
// elem.removeEventListener('click', () => {
//     console.log('div1');
// });