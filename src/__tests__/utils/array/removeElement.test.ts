import removeElement from '../../../utils/array/removeElement';

describe('removeElement', () => {
  it ('removes the first element in an array', () => {
    expect(removeElement([1, 2, 3], 0)).toEqual([2, 3]);
  });
  it ('removes an element in the middle of an array', () => {
    expect(removeElement([1, 2, 3], 1)).toEqual([1, 3]);
  });
  it ('removes first element in an array', () => {
    expect(removeElement([1, 2, 3], 2)).toEqual([1, 2]);
  });
});
