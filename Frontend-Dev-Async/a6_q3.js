// Q3 - Callback to Promise migration
function fetchBugs(callback){
  setTimeout(()=>callback(['UI glitch','API timeout','Login failure']),1000)
}

function getBugs(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const fail = Math.random()<0.2
      if(fail) return reject('API error')
      resolve(['UI glitch','API timeout','Login failure'])
    },1000)
  })
}

getBugs()
  .then(bugs=>console.table(bugs))
  .catch(err=>console.log('Failed to fetch bugs:',err))

module.exports={fetchBugs,getBugs}
