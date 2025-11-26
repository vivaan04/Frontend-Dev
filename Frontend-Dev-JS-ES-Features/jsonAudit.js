
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let obj = JSON.parse(rawData[i]);

        if (!obj.user || !obj.age) throw "Missing keys";

        obj.age = Number(obj.age);
        if (Number.isNaN(obj.age)) throw "Invalid age";

        clean.push(obj);
        console.log("Valid:", obj);
    } catch (err) {
        errors.push({ line: i, err });
        console.log("Error at line", i, "-", err);
    }
}

console.log("Clean:", clean);
console.log("Errors:", errors);
