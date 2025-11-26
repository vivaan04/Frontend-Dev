// Q2 Online Food Ordering (map + Error Handling)
const menu = {
  burger: 5.99,
  fries: 2.99,
  soda: 1.5,
  pizza: 9.5
}

function calculateBill(orderItems){
  try{
    // map to prices, throw on invalid
    const prices = orderItems.map(item => {
      if(!(item in menu)) throw new Error(`Invalid item: ${item}`)
      return menu[item]
    })
    const total = prices.reduce((s,n)=>s+n,0)
    return total
  }catch(e){
    throw e
  }
}

// demo
try{
  console.log('Total:', calculateBill(['burger','fries','soda']))
  console.log('Total:', calculateBill(['pizza','icecream']))
}catch(e){
  console.log('Order error:', e.message)
}

module.exports = {menu, calculateBill}
