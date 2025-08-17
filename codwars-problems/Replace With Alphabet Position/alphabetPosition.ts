function alphabetPosition(text:string):string {
  let result: number [] = [];
  for (let char of text.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      result.push(char.charCodeAt(0) - 96);
    }
  }
  return result.join(' ');
}