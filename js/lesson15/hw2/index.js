//


export function createLogger() {

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
        return memory.filter(i => i.type === type).sort((a, b) => b.dateTime - a.dateTime);
    }
    return {
        log,
        getRecords,
        error,
        warn,
    }
}