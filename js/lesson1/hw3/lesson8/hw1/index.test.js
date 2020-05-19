import { transactions, transaction } from './index.js'

it('return country', () => {
    const result = transaction.agent.country;
    expect(result).toEqual('Ukraine')
});
it('return value', () => {
    const result = transaction['value'];
    expect(result).toEqual(170);
});

it('return time', () => {
    const result = transaction['operation time'];
    expect(result).toEqual(1584029990001);
});