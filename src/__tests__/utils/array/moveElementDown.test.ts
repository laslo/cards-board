import moveElementDown from '../../../utils/array/moveElementDown';

describe('moveElementDown', () => {
  it ('moves array element down from the first position', () => {
    expect(moveElementDown([1, 2, 3, 4], 0)).toEqual([2, 1, 3, 4]);
  });
  it ('moves array element down from the middle position', () => {
    expect(moveElementDown([1, 2, 3, 4], 1)).toEqual([1, 3, 2, 4]);
  });
  it ('moves array element down from the penultimate position', () => {
    expect(moveElementDown([1, 2, 3, 4], 2)).toEqual([1, 2, 4, 3]);
  });
});
