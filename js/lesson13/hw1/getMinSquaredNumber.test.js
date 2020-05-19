import { getMinSquaredNumber } from './getMinSquaredNumber.js'

it('should get null if empty array', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('should get null if not array', () => {
    const result = getMinSquaredNumber(1);

    expect(result).toEqual(null);
})

it('should get min squared number of array', () => {
    const result = getMinSquaredNumber([1, 2, 3, 4]);

    expect(result).toEqual(1);
})