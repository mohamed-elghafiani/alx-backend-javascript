export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.checkType(name, 'string', 'Name');
    this._length = HolbertonCourse.checkType(length, 123, 'Length');
    this._students = HolbertonCourse.checkArrayOfStrings(students);
  }

  static checkType(value, type, propertyName) {
    if (typeof value !== typeof type) {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  set name(value) {
    this._name = HolbertonCourse.checkType(value, 'string', 'Name');
  }

  get name() {
    return this._name;
  }

  set length(value) {
    this._length = HolbertonCourse.checkType(value, 123, 'Length');
  }

  get length() {
    return this._length;
  }

  static checkArrayOfStrings(value) {
    if (!(Array.isArray(value) && value.every((item) => typeof item === 'string'))) {
      throw new TypeError('Students must be an array of Strings');
    }
    return value;
  }

  set students(value) {
    this._students = HolbertonCourse.checkArrayOfStrings(value);
  }

  get students() {
    return this._students;
  }
}
