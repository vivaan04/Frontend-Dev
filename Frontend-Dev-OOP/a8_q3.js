// a8_q3.js
// Flatten nested arrays (recursive)
function flatten(arr) {
  return arr.reduce((res, item) => {
    if (Array.isArray(item)) return res.concat(flatten(item));
    res.push(item);
    return res;
  }, []);
}

// Demo
const nested = [1, [2, [3, 4], 5], 6, [[7]], []];
console.log('a8_q3 - flatten demo:', flatten(nested));

module.exports = { flatten };