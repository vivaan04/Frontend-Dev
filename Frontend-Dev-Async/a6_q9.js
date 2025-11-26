// Q9 - Debugging the Event Loop
/*
 Predicted output:
 Script start
 Script end
 Promise callback
 Timeout callback

 Explanation: Promise.then callbacks (microtasks) run before setTimeout (macrotasks).
*/

console.log('Script start')
setTimeout(()=>console.log('Timeout callback'),0)
Promise.resolve().then(()=>console.log('Promise callback'))
console.log('Script end')

module.exports=true
