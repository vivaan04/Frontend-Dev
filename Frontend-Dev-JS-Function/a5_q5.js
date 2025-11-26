// Q5: Person and Student using constructor + prototypes
function Person(name){
  this.name=name
}

Person.prototype.printName=function(){
  console.log('Name:',this.name)
}

function Student(name,branch){
  Person.call(this,name)
  this.branch=branch
}

Student.prototype=Object.create(Person.prototype)
Student.prototype.constructor=Student

Student.prototype.printBranch=function(){
  console.log('Branch:',this.branch)
}

const s=new Student('Faizan','CS')
s.printName()
s.printBranch()

module.exports={Person,Student}
