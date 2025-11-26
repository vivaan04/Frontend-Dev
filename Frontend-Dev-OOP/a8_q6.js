// a8_q6.js
// Deep clone utility (handles objects, arrays, Date, RegExp)
function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (seen.has(value)) return seen.get(value);

  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);

  const cloned = Array.isArray(value) ? [] : {};
  seen.set(value, cloned);

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      cloned[key] = deepClone(value[key], seen);
    }
  }
  return cloned;
}

// Demo
const original = { a: 1, b: { c: 2 }, d: new Date(), e: /abc/g };
const copy = deepClone(original);
copy.b.c = 42;
console.log('a8_q6 - original.b.c (should be 2):', original.b.c);
console.log('a8_q6 - copy.b.c (should be 42):', copy.b.c);
console.log('a8_q6 - date equality (different objects):', original.d === copy.d);

module.exports = deepClone;