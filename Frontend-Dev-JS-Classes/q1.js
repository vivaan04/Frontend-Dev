class Product{
  constructor(id,name,price,category){
    this.id=id
    this.name=name
    this.price=price
    this.category=category
  }
  applyDiscount(percent){
    this.price=+(this.price*(1-percent/100)).toFixed(2)
  }
  display(){
    return `${this.id} - ${this.name} (${this.category}): $${this.price}`
  }
}

const products=[
  new Product(1,'Phone',1200,'Electronics'),
  new Product(2,'Headphones',150,'Audio'),
  new Product(3,'Laptop',2200,'Computers'),
  new Product(4,'Bag',80,'Accessories')
]

console.log('Products over 1000:')
console.log(products.filter(p=>p.price>1000).map(p=>p.display()))

module.exports=Product
