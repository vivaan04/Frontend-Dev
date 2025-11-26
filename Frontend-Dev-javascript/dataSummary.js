// Q2. Multi-Type Data Summary
// Demonstrates different data types and prints them using console.table()

let userName = "faizan";               // string
let age = 21;                        // number
let isStudent = true;                // boolean
let skills = ["JS", "Node", "Cloud"]; // array
let details = { city: "agra" };   // object
let emptyValue = null;               // null
let notAssigned;                     // undefined

console.table({
    userName: { value: userName, type: typeof userName },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    skills: { value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
    details: { value: details, type: typeof details },
    emptyValue: { value: emptyValue, type: typeof emptyValue }, // typeof null = "object"
    notAssigned: { value: notAssigned, type: typeof notAssigned }
});
