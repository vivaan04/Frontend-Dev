class Employee{
  constructor(id,name,department,salary){
    this.id=id
    this.name=name
    this.department=department
    this.salary=salary
  }
  getAnnualSalary(){return this.salary*12}
  applyBonus(percent){this.salary=this.salary*(1+percent/100)}
}

const employees=[
  new Employee(1,'A', 'Dev', 3000),
  new Employee(2,'B', 'HR', 2500),
  new Employee(3,'C', 'Ops', 2800),
  new Employee(4,'D', 'Sales', 3200),
  new Employee(5,'E', 'QA', 2600)
]

employees.forEach(e=>console.log(e.name,e.getAnnualSalary()))

const total=employees.reduce((s,e)=>s+e.getAnnualSalary(),0)
console.log('Total annual payout',total)

if(typeof module!=='undefined')module.exports={Employee,employees}
