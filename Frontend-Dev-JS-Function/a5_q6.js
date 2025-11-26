// Q6: Prototype chain Person -> Faculty -> Professor
function Person(name){this.name=name}
Person.prototype.getName=function(){console.log('Person name',this.name)}

function Faculty(name,department){Person.call(this,name);this.department=department}
Faculty.prototype=Object.create(Person.prototype)
Faculty.prototype.constructor=Faculty
Faculty.prototype.getDept=function(){console.log('Department',this.department)}

function Professor(name,department,subject){Faculty.call(this,name,department);this.subject=subject}
Professor.prototype=Object.create(Faculty.prototype)
Professor.prototype.constructor=Professor
Professor.prototype.getSubject=function(){console.log('Subject',this.subject)}

const p=new Professor('Faizan','CS','Algorithms')
p.getName()
p.getDept()
p.getSubject()

module.exports={Person,Faculty,Professor}
