// Q7 - Promise.allSettled for profile, posts, messages
function loadProfile(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.25) return reject('Profile failed')
      resolve('Profile Loaded')
    },2000)
  })
}

function loadPosts(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.25) return reject('Posts failed')
      resolve('Posts Loaded')
    },1500)
  })
}

function loadMessages(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.25) return reject('Messages failed')
      resolve('Messages Loaded')
    },1000)
  })
}

async function runLoads(){
  const start = Date.now()
  const results = await Promise.allSettled([loadProfile(),loadPosts(),loadMessages()])
  results.forEach((r,i)=>{
    if(r.status==='fulfilled') console.log(`Module ${i+1} succeeded:`,r.value)
    else console.log(`Module ${i+1} failed:`,r.reason)
  })
  const ms = Date.now()-start
  console.log('Total time (ms):',ms)
}

runLoads()

module.exports={loadProfile,loadPosts,loadMessages}
