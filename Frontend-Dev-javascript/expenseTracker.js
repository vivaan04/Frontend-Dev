// Q3. Monthly Expense Tracker
// Calculates total, average, and amount after 10% tax

let expenses = [5000, 1200, 8000, 2000, 1500]; 
// food, travel, rent, bills, leisure

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

// Add 10% tax
let finalAmount = total;
finalAmount += finalAmount * 0.10; // assignment operator

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After Tax:", finalAmount.toFixed(2));
    