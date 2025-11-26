// Q5 - Callback hell then async/await
function delay(ms){return new Promise(r=>setTimeout(r,ms))}

// Nested callbacks (callback hell)
function pipelineCallbacks(cb){
  setTimeout(()=>{
    console.log('design')
    setTimeout(()=>{
      console.log('build')
      setTimeout(()=>{
        console.log('test')
        setTimeout(()=>{
          console.log('deploy')
          setTimeout(()=>{
            console.log('celebrate')
            if(cb) cb()
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
}

// Cleaner with async/await
async function pipelineAsync(){
  // async/await reads top-to-bottom and avoids deep nesting
  await delay(1000); console.log('design')
  await delay(1000); console.log('build')
  await delay(1000); console.log('test')
  await delay(1000); console.log('deploy')
  await delay(1000); console.log('celebrate')
}

console.log('--- callback version ---')
pipelineCallbacks(()=>{
  console.log('callback pipeline done')
  console.log('--- async/await version ---')
  pipelineAsync().then(()=>console.log('async pipeline done'))
})

module.exports={pipelineCallbacks,pipelineAsync}
