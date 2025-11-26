// Q10 - Async delivery pipeline
function randDelay(){return 1000 + Math.random()*1000}

function step(name){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.15) return reject(`${name} failed`)
      console.log(`Step: ${name}`)
      resolve(name)
    }, randDelay())
  })
}

function takeOrder(){return step('Order taken')}
function prepare(){return step('Food prepared')}
function pack(){return step('Package ready')}
function dispatch(){return step('Out for delivery')}
function deliver(){return step('Delivery completed')}

async function runPipeline(){
  console.log('Start Pipeline')
  try{
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    await deliver();
    console.log('Delivery completed!')
  }catch(e){
    console.log('Pipeline failed!')
  }
}

runPipeline()

module.exports={runPipeline}
