// Q6. Progressive Discount System

let total = 7500; // example input
let discount = 0;

if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
} else {
    discount = 0;
}

let finalPrice = total - (total * discount / 100);

console.log("Original Total:", total);
console.log("Discount Applied:", discount + "%");
console.log("Final Price:", Math.round(finalPrice));
