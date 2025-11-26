// Q1 - Async Coffee Maker
function delay(ms){return new Promise(r=>setTimeout(r,ms))}

function boilWater(){
  return new Promise(async (resolve,reject)=>{
    await delay(1000 + Math.random()*1000)
    if(Math.random()<0.15) return reject('Boiling failed')
    console.log('Water boiled')
    resolve('boiled water')
  })
}

function brewCoffee(){
  return new Promise(async (resolve,reject)=>{
    await delay(1000 + Math.random()*1000)
    if(Math.random()<0.15) return reject('Brewing failed')
    console.log('Coffee brewed')
    resolve('brewed coffee')
  })
}

function pourCup(){
  return new Promise(async (resolve,reject)=>{
    await delay(1000 + Math.random()*1000)
    if(Math.random()<0.1) return reject('Pouring failed')
    console.log('Poured into cup')
    resolve('cup ready')
  })
}

// Use promise chaining
boilWater()
  .then(()=>brewCoffee())
  .then(()=>pourCup())
  .then(()=>console.log('Coffee ready for the team!'))
  .catch(err=>console.log('Coffee process failed:',err))

module.exports={boilWater,brewCoffee,pourCup}
