// Q9: rewrite Person->Student using ES6 classes
function PersonProto(name){this.name=name}
PersonProto.prototype.printName=function(){console.log('Proto Name',this.name)}

function StudentProto(name,branch){PersonProto.call(this,name);this.branch=branch}
StudentProto.prototype=Object.create(PersonProto.prototype)
StudentProto.prototype.constructor=StudentProto
StudentProto.prototype.printBranch=function(){console.log('Proto Branch',this.branch)}

const sp=new StudentProto('Faizan','CS')
sp.printName();sp.printBranch()

// ES6 classes
class PersonClass{
  constructor(name){this.name=name}
  printName(){console.log('Class Name',this.name)}
}

class StudentClass extends PersonClass{
  constructor(name,branch){super(name);this.branch=branch}
  printBranch(){console.log('Class Branch',this.branch)}
}

const sc=new StudentClass('Faizan','CS')
sc.printName();sc.printBranch()

module.exports={PersonProto,StudentProto,PersonClass,StudentClass}
