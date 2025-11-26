// Q8. Employee Salary Projection

let salary = 30000; // current salary
let incrementRate = 10; // % increment per year

let projection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * (incrementRate / 100);
    projection.push({ Year: year, Salary: Math.round(salary) });
}

console.table(projection);
