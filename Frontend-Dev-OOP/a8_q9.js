// a8_q9.js
// Promise pool (concurrency limiter)
async function promisePool(tasks, concurrency = 2) {
  const results = [];
  const executing = [];

  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);

    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);

    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

// Demo tasks
const wait = (t, v) => () => new Promise((res) => setTimeout(() => res(v), t));

(async () => {
  const tasks = [wait(300, 'A'), wait(100, 'B'), wait(200, 'C'), wait(50, 'D')];
  const start = Date.now();
  const out = await promisePool(tasks, 2);
  console.log('a8_q9 - results:', out, 'elapsed ms:', Date.now() - start);
})();

module.exports = promisePool;