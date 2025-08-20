const findOdd = (xs: number[]): number => xs.reduce((acc, num) => acc ^ num, 0);
