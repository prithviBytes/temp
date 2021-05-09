export function isObjectInArray(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      return true;
    }
  }
  return false;
}
