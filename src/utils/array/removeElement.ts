const removeElement = <T>(arr: T[], index: number): T[] => index >= 0 && index <= arr.length - 1
  ? ([
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
  ])
  : arr;

export default removeElement;
