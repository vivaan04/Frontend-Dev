// Q4 - Deployment servers: Promise.all and Promise.race
function serverA(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.15) return reject('Server A failed')
      resolve('Server A done')
    },2000)
  })
}

function serverB(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.15) return reject('Server B failed')
      resolve('Server B done')
    },3000)
  })
}

Promise.all([serverA(),serverB()])
  .then(()=>console.log('Deployment completed for all servers'))
  .catch(err=>console.log('Deployment error (all):',err))

Promise.race([serverA(),serverB()])
  .then(result=>console.log('Fastest response:',result))
  .catch(err=>console.log('Race error:',err))

module.exports={serverA,serverB}
