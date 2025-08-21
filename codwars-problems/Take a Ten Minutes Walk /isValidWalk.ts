function isValidWalk(walk: string[]) {
  if (walk.length !== 10) return false;
  let vertical = 0;
  let horizontal = 0;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n' :
        vertical += 1;
        break;
      case 's' :
        vertical -= 1;
        break;
      case 'w':
        horizontal -= 1;
        break;
      case "e":
        horizontal +=1;
        break;
    }
  }

  return vertical === 0 && horizontal === 0;
}