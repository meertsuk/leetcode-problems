const likes = (a : string[]) : string => {
  const formats: { [key: number]: (arr: string[]) => string } = {
    0: () => "no one likes this",
    1: (arr) => `${arr[0]} likes this`,
    2: (arr) => `${arr[0]} and ${arr[1]} like this`,
    3: (arr) => `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
  };
  return (formats[a.length] || ((arr) => `${a[0]}, ${a[1]} and ${a.length - 2} others like this` ))(a);
}