// Q8 - Retry mechanism for submitOrder
function submitOrder(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Math.random()<0.5) reject('Network error')
      else resolve('Order submitted')
    },500)
  })
}

async function processOrder(){
  const maxAttempts = 3
  for(let attempt=1; attempt<=maxAttempts; attempt++){
    try{
      await submitOrder()
      console.log(`Attempt ${attempt}: Success`)
      return
    }catch(e){
      console.log(`Attempt ${attempt}: Failed`)
      if(attempt===maxAttempts) throw new Error('Order could not be processed')
    }
  }
}

(async ()=>{
  try{
    await processOrder()
  }catch(e){
    console.log(e.message)
  }
})()

module.exports={submitOrder,processOrder}
