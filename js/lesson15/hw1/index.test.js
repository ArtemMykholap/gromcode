import { createCalculator } from './index.js'

it('should return decrease', () => {
    const check = createCalculator();
    check.decrease(10);
    let result = check.getMemo();
    expect(result).toEqual(-10);
});



it('should return sum', () => {
    const check = createCalculator();
    check.add(10);
    let result = check.getMemo();
    expect(result).toEqual(0);
});