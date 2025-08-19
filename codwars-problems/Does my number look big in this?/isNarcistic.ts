function narcissistic(value: number): boolean {
  const digits: number[] = value.toString().split('').map(Number);
  let sum: number = digits.reduce((acc, digit) => acc + digit ** digits.length, 0);

  return sum === value;
}