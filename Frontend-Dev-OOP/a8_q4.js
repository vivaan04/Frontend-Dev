// a8_q4.js
// Debounce and Throttle utilities

function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Demo
const log = (msg) => console.log(new Date().toISOString(), msg);
const debounced = debounce(() => log('debounced called'), 200);
const throttled = throttle(() => log('throttled called'), 200);

console.log('a8_q4 - calling debounced 5x quickly:');
for (let i = 0; i < 5; i++) debounced();

setTimeout(() => {
  console.log('a8_q4 - calling throttled 5x quickly:');
  for (let i = 0; i < 5; i++) throttled();
}, 500);

module.exports = { debounce, throttle };