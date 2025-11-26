// Q1. Personalized Login Greeting
// Program greets user based on the current hour

let userName = "Aadi"; // example user
let currentHour = new Date().getHours(); // gets hour 0–23

let message = ""; // final greeting message

if (currentHour < 12) {
    message = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    message = `Good Afternoon ${userName}!`;
} else {
    message = `Good Evening ${userName}!`;
}

console.log(message);
