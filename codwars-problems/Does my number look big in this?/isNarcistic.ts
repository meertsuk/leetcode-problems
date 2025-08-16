function narcissistic(value: number): boolean {
  let digits: number[] = value.toString().split('').map(Number);
  let sum: number = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] ** digits.length;
  }
  return sum == value;
}