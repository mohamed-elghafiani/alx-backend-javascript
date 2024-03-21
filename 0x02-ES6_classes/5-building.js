export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must define evacuationWarningMessage');
      }
    }
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft should be a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
