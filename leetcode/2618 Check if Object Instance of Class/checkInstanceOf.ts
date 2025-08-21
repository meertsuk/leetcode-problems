function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (typeof classFunction !== 'function' || obj === null || obj === undefined) {
    return false;
  }

  let objProto = Object.getPrototypeOf(Object(obj));
  const classProto = classFunction.prototype

  while (objProto) {
    if (objProto === classProto) return true;
    objProto = Object.getPrototypeOf(objProto);
  }

  return false;

}