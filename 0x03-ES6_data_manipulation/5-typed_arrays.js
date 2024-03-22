export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const res = new DataView(new ArrayBuffer(length), 0, length);
  res.setInt8(position, value);
  return res;
}
