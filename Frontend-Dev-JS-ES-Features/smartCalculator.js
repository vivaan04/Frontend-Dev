"use strict";

const num1 = 25, num2 = 0;
const operations = ["add", "divide", "power", "root", "subtract"];

for (let op of operations) {
    try {
        let result;
        switch (op) {
            case "add": result = num1 + num2; break;
            case "subtract": result = num1 - num2; break;
            case "divide":
                if (num2 === 0) throw "Cannot divide by zero";
                result = num1 / num2;
                break;
            case "power": result = num1 ** num2; break;
            case "root":
                if (num1 < 0) throw "Negative root not allowed";
                result = Math.sqrt(num1);
                break;
            default: throw "Invalid operation";
        }
        console.log(op, "=", result);
    } catch (err) {
        console.log(op, "-", err);
    }
}

