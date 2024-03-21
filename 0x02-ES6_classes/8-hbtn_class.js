export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('Size should be a number');
    }
    this._size = value;
  }

  get size() {
    return this._size;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('Location should be a string');
    }
    this._location = value;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
