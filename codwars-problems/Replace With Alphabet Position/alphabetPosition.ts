function alphabetPosition(text:string):string {
  return text
    .toLowerCase()
    .split('')
    .reduce((acc, char) => {
      if (/[a-z]/.test(char)) {
        acc.push(char.charCodeAt(0) - 96);
      }
      return acc;
    }, [])
    .join(' ')
}