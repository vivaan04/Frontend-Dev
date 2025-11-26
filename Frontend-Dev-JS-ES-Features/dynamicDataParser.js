
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let valid = [];
let invalid = [];

for (let v of apiData) {
    let num = Number(v);

    if (!Number.isNaN(num)) {
        valid.push(num);
    } else {
        invalid.push(v);
    }

    console.log("Value:", v, "| Number:", num, "| Boolean:", Boolean(v), "| String:", String(v));
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
