// input:dateObject
// output:dateObject with method 




export function shmoment(date) {
    let newDate = new Date(date);
    const reTime = {
        add(key, value) {
            let upDate = {
                years: (value) => (date.setFullYear(date.getFullYear() + value)),
                months: (value) => (date.setMonth(date.getMonth() + value)),
                days: (value) => (date.setDate(date.getDate() + value)),
                hours: (value) => (date.setHours(date.getHours() + value)),
                minutes: (value) => (date.setMinutes(date.getMinutes() + value)),
                seconds: (value) => (date.setSeconds(date.getSeconds() + value)),
                milliseconds: (value) => (date.setMilliseconds(date.getMilliseconds() + value)),
            }
            newDate = new Date(upDate[key](value));
            return reTime
        },
        subtract(key, value) {
            let upDate = {
                years: (value) => (date.setFullYear(date.getFullYear() - value)),
                months: (value) => (date.setMonth(date.getMonth() - value)),
                days: (value) => (date.setDate(date.getDate() - value)),
                hours: (value) => (date.setHours(date.getHours() - value)),
                minutes: (value) => (date.setMinutes(date.getMinutes() - value)),
                seconds: (value) => (date.setSeconds(date.getSeconds() - value)),
                milliseconds: (value) => (date.setMilliseconds(date.getMilliseconds() - value)),
            }
            newDate = new Date(upDate[key](value));
            return reTime
        },
        result() {
            return newDate
        }

    }

    return reTime
}
console.log(shmoment(new Date()).subtract('years', 3).result());