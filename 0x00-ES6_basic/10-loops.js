export default function appendToEachArrayValue(array, appendString) {
  const tmpArr = [];
  for (const idx of array) {
    const value = array[idx];
    tmpArr.push(appendString + value);
  }

  return tmpArr;
}
