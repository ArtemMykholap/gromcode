// find the difference between dates in milliseconds modulo
// find out how many days
// take days in milliseconds from the total
// and divide the result into hours, minutes and seconds

// let startDate=new Date('1/11/2019/ 01:01:01');
// let endDate=new Date('1/12/2018/ 04:03:06');


export function getDiff(startDate, endDate) {
    const msInDay = 1000 * 60 * 60 * 24;
    const modulTime = Math.abs(startDate.getTime() - endDate.getTime());

    const howDaysFloor = Math.floor(modulTime / msInDay);
    const howHoursMs = modulTime - (howDaysFloor * msInDay);
    const howHoursFloor = Math.floor(howHoursMs / (1000 * 60 * 60));
    const howMinutesMs = modulTime - (howHoursFloor * msInDay / 24 + howDaysFloor * msInDay);
    const howMinutesFloor = Math.floor(howMinutesMs / (1000 * 60));
    const howSecMs = modulTime - (howMinutesFloor * (1000 * 60) + howDaysFloor * msInDay + howHoursFloor * (1000 * 60 * 60))
    const howSecFloor = Math.floor(howSecMs / 1000);

    // console.log(modulTime);
    // console.log(howDaysFloor)
    // console.log(howHoursMs)
    // console.log(howHoursFloor)
    // console.log(howMinutesMs)
    // console.log(howMinutesFloor)
    // console.log(howSecFloor)
    console.log(`${howDaysFloor}d ${howHoursFloor}h ${howMinutesFloor}m ${howSecFloor}s `)
}


getDiff(startDate, endDate);
// console.log(startDate)
// console.log(endDate)