export default function createIteratorObject(report) {
  let employeesIterator = [];
  for (const key of Object.keys(report.allEmployees)) {
    employeesIterator = [...employeesIterator, ...report.allEmployees[key]];
  }

  return employeesIterator;
}
