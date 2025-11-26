
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw "Null transaction";
        if (!t.id || t.amount === undefined) throw "Missing fields";
        if (t.amount < 0) throw "Negative amount";

        valid.push(t);
        console.log("Valid:", t);
    } catch (err) {
        invalid.push({ t, err });
        console.log("Invalid:", err);
    }
}

console.log("Valid Count:", valid.length);
console.log("Invalid Count:", invalid.length);
