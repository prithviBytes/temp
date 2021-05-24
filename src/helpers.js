export function isObjectInArray(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      return true;
    }
  }
  return false;
}

console.log(unitizeNumber(560343421));

export function unitizeNumber(number) {
  const stringNumber = number.toString();
  const length = stringNumber.length;
  if (length < 4) return number;
  if (length === 4)
    return `${stringNumber.charAt(0)}.${stringNumber.charAt(1)}K`;
  if (length === 5) return `${stringNumber.slice(0, 2)}K`;
  if (length === 6) return `${stringNumber.slice(0, 3)}K`;
  if (length === 7)
    return `${stringNumber.charAt(0)}.${stringNumber.charAt(1)}M`;
  if (length > 7 && length <= 9) return `${stringNumber.slice(0, length - 6)}M`;
  if (length > 9) return `${stringNumber.slice(0, length - 9)}B`;
}
