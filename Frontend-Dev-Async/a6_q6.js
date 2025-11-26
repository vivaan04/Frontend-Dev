// Q6 - Fetch products from Fake Store API
async function fetchProducts(){
  const url = 'https://fakestoreapi.com/products'
  try{
    const res = await fetch(url)
    if(!res.ok) throw new Error('Network response not ok')
    const products = await res.json()
    products.forEach(p=>{
      console.log('Product:',p.title)
      console.log('Price: $' + p.price)
      console.log('Image:',p.image)
      console.log('---')
    })
  }catch(e){
    console.log('Failed to load products. Please try again.')
  }
}

// If running in Node <18, fetch may not exist. The user can run in modern Node or browser.
if(typeof fetch==='undefined'){
  console.log('fetch not available in this environment. Run in Node 18+ or browser to test a6_q6.js')
} else {
  fetchProducts()
}

module.exports=fetchProducts
