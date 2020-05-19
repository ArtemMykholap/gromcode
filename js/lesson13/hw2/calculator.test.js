import { calc } from './calculator'

it('should get null if not string', () => {
    const result = calc(typeof arr !== 'string');

    expect(result).toEqual(null);
});

it('should get sum', () => {
    const result = calc('1 + 2');
    expect(result).toEqual('1 + 2 = 3');

});
it('should get difference ', () => {
    const result = calc('5 - 2');

    expect(result).toEqual('5 - 2 = 3');
});


it('should get multiplication', () => {
    const result = calc('2 * 2');

    expect(result).toEqual('2 * 2 = 4');
});

it('should get division', () => {
    const result = calc('4 / 2');

    expect(result).toEqual('4 / 2 = 2');
});