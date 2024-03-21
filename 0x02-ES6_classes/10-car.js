const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;

    Object.defineProperty(this, cloneCarSymbol, {
      value: () => new this.constructor(this._brand, this._motor, this._color),
      enumerable: false,
      writable: true,
      configurable: true,
    });
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw new Error('Brand should be a number');
    }
    this._brand = value;
  }

  get brand() {
    return this._brand;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw new Error('Motor should be a string');
    }
    this._motor = value;
  }

  get motor() {
    return this._motor;
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw new Error('Color should be a string');
    }
    this._color = value;
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
