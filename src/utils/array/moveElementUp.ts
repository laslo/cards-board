const moveElementUp = <T>(arr: T[], index: number): T[] => index > 0
  ? ([
    ...arr.slice(0, index - 1),
    arr[index],
    arr[index - 1],
    ...arr.slice(index + 1),
  ])
  : arr

export default moveElementUp;
