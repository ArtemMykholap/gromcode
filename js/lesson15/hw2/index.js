// function createLogger() {

//     let memory = [];

//     function warn(text) {
//         let warn = {
//             message: text,
//             dateTime: new Date(),
//             type: 'warn'
//         }

//         return memory.push(warn);
//     }

//     function error(text) {
//         let error = {
//             message: text,
//             dateTime: new Date(),
//             type: 'error'
//         }

//         return memory.push(error);
//     }

//     function log(text) {
//         let log = {
//             message: text,
//             dateTime: new Date(),
//             type: 'log'
//         }
//         return memory.push(log);
//     }

//     function getRecords(type) {

//         // return memory[type].sort((a, b) => b - a);
//         return memory.sort((a, b) => b.dateTime - a.dateTime)
//             // return memory.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     return {
//         log,
//         getRecords,
//         error,
//         warn,
//     }
// }
// const test1 = createLogger();
// const test2 = createLogger();
// const test3 = createLogger();
// test1.log('chenge1');
// test1.error('chenge1');
// test1.error('chenge1');
// test1.log('chenge1');
// test1.log('chenge1');
// test1.log('chenge1');
// test1.log('chenge1');
// test1.error('chenge1');
// test1.error('chenge1');
// test1.error('chenge1');
// test1.warn('chenge1');
// test2.log('chenge2');
// test2.error('chenge2');
// test2.warn('chenge2');
// test3.log('chenge3');
// test3.error('chenge3');
// test3.warn('chenge3');
// console.table(test1.getRecords());

function createLogger() {

    let memory = [];

    function warn(text) {
        let warn = {
            message: text,
            dateTime: new Date(),
            type: 'warn'
        }

        return memory.push(warn);
    }

    function error(text) {
        let error = {
            message: text,
            dateTime: new Date(),
            type: 'error'
        }

        return memory.push(error);
    }

    function log(text) {
        let log = {
            message: text,
            dateTime: new Date(),
            type: 'log'
        }
        return memory.push(log);
    }

    function getRecords(type) {


        let res = (type === undefined) ? memory : memory.filter(el => el.type === type);

        return res.sort((a, b) => b.dateTime - a.dateTime);




        // return memory(type).sort((a, b) => b - a);
        //  return memory.sort((a, b) => b.localeCompare(a))
        // return memory.sort((a, b) => b.dateTime - a.dateTime);

    }
    return {
        log,
        getRecords,
        error,
        warn,
    }
}
// const test1 = createLogger();
// const test2 = createLogger();
// const test3 = createLogger();
// test1.log('chenge2');
// test1.error('chenge1');
// test1.error('chenge1');
// test1.log('chenge3');
// test1.log('chenge1');
// test1.log('chenge1');
// test1.log('chenge1');
// test1.error('chenge1');
// test1.error('chenge1');
// test1.error('chenge1');
// test1.warn('chenge1');
// test2.log('chenge2');
// test2.warn('chenge2');
// test3.log('chenge3');
// test3.error('chenge3');
// test3.warn('chenge3');

// console.table(test1.getRecords('log'));

// const text = ['test2','test1','test4','test3'];
// // numbers1.sort((el1, el2) => el1 - el2);
// console.log(text.sort((a, b) => a.localeCompare(b)));