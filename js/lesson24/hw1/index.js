// find the difference between dates in milliseconds modulo
// find out how many days
// take days in milliseconds from the total
// and divide the result into hours, minutes and seconds

// let startDate = new Date('1/11/2018/ 01:01:01');
// let endDate = new Date('1/12/2019/ 04:03:06');


let startDate = new Date('1/11/2018/ 01:01:01');
let endDate = new Date('1/12/2019/ 04:03:06');


function getDiff(startDate, endDate) {
    const msInMinut = 1000 * 60;
    const msInHour = msInMinut * 60;
    const msInDay = msInHour * 24;
    const modulTime = Math.abs(startDate.getTime() - endDate.getTime());

    const howDays = Math.floor(modulTime / msInDay);
    const restAfterDays = modulTime % msInDay;
    const howHours = Math.floor(restAfterDays / msInHour);
    const restAfterHours = modulTime % msInHour;
    const howMinutes = Math.floor(restAfterHours / msInMinut);
    const restAfterMinutes = modulTime % msInMinut;
    const howSec = Math.floor(restAfterMinutes / 1000);


    return `${howDays}d ${howHours}h ${howMinutes}m ${howSec}s `
}

// console.log (getDiff(startDate, endDate))
export { getDiff }