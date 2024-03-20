export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  set name(value) {
    if (!Currency.isString(value)) {
      throw new TypeError('Name should be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (!Currency.isString(value)) {
      throw new TypeError('Code should be a string');
    }
    this._code = value;
  }

  static isString(value) {
    if (typeof value === 'string') {
      return true;
    }
    return false;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
