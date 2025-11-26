
var score = 50;
function announce() {
    console.log("Game started");
}

console.log(score);
announce();

let status = "ready";

function startGame() {
    console.log(status);
}
startGame();

// Arrow version
const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();
