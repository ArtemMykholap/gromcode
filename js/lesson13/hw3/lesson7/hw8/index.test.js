import { arrAverage } from './index.js'

it('should get null if not array', () => {
    const result = arrAverage(typeof arr !== Array);

    expect(result).toEqual(null);
});

it('should get average', () => {
    const result = arrAverage([4, 6, 8]);
    expect(result).toEqual(6);
});


it('should get null if not array', () => {
    const result = arrAverage([4, 6, 8]);
    expect(typeof result !== 'string').toEqual(true);
});