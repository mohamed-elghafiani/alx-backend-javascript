export default function appendToEachArrayValue(array, appendString) {
  const tmpArr = [];
  for (const value of array) {
    tmpArr.push(appendString + value);
  }

  return tmpArr;
}
