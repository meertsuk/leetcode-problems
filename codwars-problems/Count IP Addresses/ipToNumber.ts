function ipsBetween(start: string, end: string): number {
  const startIp = start.split('.').map(Number).reduce((acc, num) => acc*256 + num, 0);
  const endIp = end.split('.').map(Number).reduce((acc, num) => acc*256 + num, 0);

  return endIp - startIp;
}