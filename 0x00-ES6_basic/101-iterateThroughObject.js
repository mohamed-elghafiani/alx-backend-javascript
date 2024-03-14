export default function iterateThroughObject(reportWithIterator) {
  let fullStr = '';
  for (const employee of reportWithIterator) {
    fullStr = fullStr ? `${fullStr} | ${employee}` : employee;
  }
  return fullStr;
}
