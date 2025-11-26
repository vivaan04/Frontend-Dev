let marks = [85, 90, 72, 66, 88]; 

let hasFailedSubject = marks.some(m => m < 35);

let total = marks.reduce((a, b) => a + b, 0);
let average = total / marks.length;
let percentage = (total / 500) * 100;

if (hasFailedSubject) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
