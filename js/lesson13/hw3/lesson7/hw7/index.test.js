  import { filterNames } from './index.js'



  it('should return typeof result', () => {
      const result = filterNames(['John', 'Olivya', 'Oleksandr', 'Vanya', 'Nastya'], 'ya');

      expect(typeof result !== 'string').toEqual(true);
  });


  it('should return empty array if there are no matching elements ', () => {
      const result = filterNames(['John', 'Olivya', 'Oleksandr', 'Vanya', 'Nastya'], 'der');
      expect(result).toEqual([]);
  });


  it('should return length of elements ', () => {
      const result = filterNames(['John', 'Olivya', 'Oleksandr', 'Vanya', 'Nastya'], 'ya');
      expect(result[1].length > 5).toEqual(true);

  });