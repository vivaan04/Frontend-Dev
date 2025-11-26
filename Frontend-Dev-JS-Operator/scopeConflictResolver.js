let bonus = 5000; // global

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary:", salary);
}

calculateSalary();

// Effect on global scope
let isPermanent = false; 
console.log("Global isPermanent:", isPermanent);
