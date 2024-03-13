export default function appendToEachArrayValue(array, appendString) {
  const tmpArr = { ...array };
  for (const idx of array) {
    const value = array[idx];
    tmpArr[idx] = appendString + value;
  }

  return tmpArr;
}
