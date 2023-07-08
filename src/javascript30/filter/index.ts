type Function = (...args: any) => any;

export const filter = (arr: number[], fn: Function) => {
  let filteredArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};
