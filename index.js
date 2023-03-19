var randomNumber1 = Math.random() * 5 + 1;
randomNumber1 = Math.round(randomNumber1);
var leftDice = document.querySelector(".img1");
leftDice.setAttribute("src", `images/dice${randomNumber1}.png`);
var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
var rightDice = document.querySelector(".img2");
rightDice.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "It's a Tie!";
}
else {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩";
} 