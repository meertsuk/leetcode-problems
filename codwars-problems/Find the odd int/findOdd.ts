const findOdd = (xs: number[]): number => {
  let result: number = 0;
  for (let i = 0; i < xs.length; i++) {
    result ^= xs[i]
  }
  return result;
};
