// Q3: arrow function method vs normal function
const userArrow={
  name:'Faizan',
  showName:()=>{
    console.log('arrow this.name =', this.name)
  }
}

userArrow.showName() // this.name undefined because arrow uses lexical this (module/global)

const userNormal={
  name:'Faizan',
  showName:function(){
    console.log('normal this.name =', this.name)
  }
}

userNormal.showName() // works because normal function gets this bound to the object

module.exports={userArrow,userNormal}
