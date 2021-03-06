export const addImage = imgSrc => {
    const p = new Promise((resolveCb, rejectCb) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolveCb({ width, height });
        };
        imgElem.addEventListener('load', onImageLoaded)
        imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
    });

    return p;

};
const imgSrc = 'https://focus.ua/storage/pub/images/2017/2615387.jpg'


const resultPromise = addImage(imgSrc);
resultPromise.then(data => console.log(data))
resultPromise.catch(error => console.log(error))




// const onImageLoaded = (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     const { width, height } = data;
//     const sizeElem = document.querySelector('.image-size');
//     sizeElem.textContent = `${width} x ${height}`;
// };
// addImage(imgSrc, onImageLoaded);