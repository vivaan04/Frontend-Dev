// Q1 Student Result Processing (reduce + Classes)
class Student{
  constructor(name, marks){
    this.name = name
    this.marks = marks // array of numbers
  }
  calculateAverage(){
    if(!this.marks.length) return 0
    const sum = this.marks.reduce((s,n)=>s+n,0)
    return sum / this.marks.length
  }
  getGrade(){
    const avg = this.calculateAverage()
    if(avg >= 80) return 'A'
    if(avg >= 60) return 'B'
    if(avg >= 40) return 'C'
    return 'F'
  }
}

const s1 = new Student('Alice',[85,78,90])
const s2 = new Student('Bob',[65,58,70])
const s3 = new Student('Cara',[30,45,38])

console.log(s1.name, s1.calculateAverage(), s1.getGrade())
console.log(s2.name, s2.calculateAverage(), s2.getGrade())
console.log(s3.name, s3.calculateAverage(), s3.getGrade())

module.exports = Student
