const encryptThis = (str: string): string => {
  const encrypted  = str.split(' ').map(word => {
    if (word.length === 0) return "";

    const chars = word.split('');
    chars[0] = chars[0].charCodeAt(0).toString();

    if (chars.length > 2) {
      const temp = chars[1];
      chars[1] = chars[chars.length -1];
      chars[chars.length -1] = temp;
    }

    return chars.join('');
  });

  return encrypted.join(' ');

}