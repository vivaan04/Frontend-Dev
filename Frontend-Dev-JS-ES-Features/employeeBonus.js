"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let e of employees) {
    try {
        let s = Number(e.salary);
        let y = Number(e.years);

        if (Number.isNaN(s) || Number.isNaN(y)) throw "Invalid data";

        let bonus = y > 3 ? s * 0.1 : s * 0.05;

        console.log(e.name, "| Salary:", s, "| Years:", y, "| Bonus:", bonus);
    } catch (err) {
        console.log("Error for", e.name);
    }
}
