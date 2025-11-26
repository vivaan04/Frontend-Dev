// Q2 - Task Scheduler: micro vs macro
console.log('Start')

setTimeout(()=>console.log('setTimeout (macrotask)'),0)

Promise.resolve().then(()=>console.log('Promise.then (microtask)'))

console.log('Sync log')

console.log('End')

/*
 Explanation:
 Microtasks (Promise.then) run before macrotasks (setTimeout),
 so output order will place the Promise callback before the timeout.
*/

module.exports=true
