// a8_q8.js
// Fibonacci generator and memoized function

function* fibGenerator(limit = 10) {
  let a = 0, b = 1, i = 0;
  while (i++ < limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

const fastFib = memoize(slowFib);

console.log('a8_q8 - fib generator 8 values:', [...fibGenerator(8)]);
console.log('a8_q8 - slowFib(20) with memoize:', fastFib(20));

module.exports = { fibGenerator, memoize, fastFib };