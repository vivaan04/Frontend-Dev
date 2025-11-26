class Cart{
  constructor(){this.items=[]}
  addItem(name,price,quantity){this.items.push({name,price,quantity})}
  getTotal(){return this.items.reduce((s,i)=>s+i.price*i.quantity,0)}
  applyCoupon(code){
    const m=code.match(/^(?:SAVE|DISC)(\d{1,2})$/)
    if(!m)return this.getTotal()
    const pct=Number(m[1])
    return this.getTotal()*(1-pct/100)
  }
}

const cart=new Cart()
cart.addItem('A',100,2)
cart.addItem('B',50,1)
console.log('Total',cart.getTotal())
console.log('With coupon SAVE20',cart.applyCoupon('SAVE20'))

if(typeof module!=='undefined')module.exports=Cart
