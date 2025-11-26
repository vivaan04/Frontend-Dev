const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let item of cart) {
    let discount = 0;

    if (item.category === "electronics") discount = 10;
    if (item.category === "fashion") discount = 5;

    let finalPrice = item.price - (item.price * discount / 100);
    total += finalPrice;
}

if (total > 50000) total -= total * 0.05;

console.log("Final Total:", Math.round(total));
