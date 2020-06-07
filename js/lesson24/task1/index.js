const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']


export const DayOfWeek = (date, days) => {
    const day = new Date(date).getDay();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];
};
// const result = DayOfWeek(new Date(2019, 0, 1), 14)

// console.log(result);