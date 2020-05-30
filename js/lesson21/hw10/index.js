export const manageClasses = () => {
    const classesOne = document.querySelector('.one')
    classesOne.classList.add('selected');
    const classesTwo = document.querySelector('.two')
    classesTwo.classList.remove('selected');
    const classThree = document.querySelector('.three')
    classThree.classList.toggle('three_done');
    const classFour = document.querySelector('.four')
    if (classFour.classList.contains('some-class')) { //toggle work
        classFour.classList.toggle('another-class');
    };


};
// manageClasses()