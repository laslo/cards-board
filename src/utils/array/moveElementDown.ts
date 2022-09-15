const moveElementDown = <T>(arr: T[], index: number): T[] => index >= arr.length
  ? arr
  : ([
    ...arr.slice(0, index),
    arr[index + 1],
    arr[index],
    ...arr.slice(index + 2),
  ]);

export default moveElementDown;
