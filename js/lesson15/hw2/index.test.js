import { createLogger } from './index.js'

it('return warn message', () => {
    let warnTest = createLogger()
    warnTest.warn('User try to restricted page.');
    let result = warnTest.getRecords('warn');
    expect(result[0].message).toEqual('User try to restricted page.');
});

it('return error message', () => {
    let errorTest = createLogger();
    errorTest.error('This message it`s dumb')
    let result = errorTest.getRecords('error');
    expect(result[0].message).toEqual('This message it`s dumb');

});