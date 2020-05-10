let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

let winner = document.querySelector(".champion");
let picAss = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png'];

function rollDice() {
    return Math.floor(6*(Math.random()));
}

function diceImg() {
    let dice1 = rollDice();
    let dice2 = rollDice();
    img1.setAttribute('src', picAss[dice1]);
    img2.setAttribute('src', picAss[dice2]);
    // console.log(dice1);
    // console.log(dice2);
    console.log(winner.innerHTML);
    if (dice1 > dice2) {
        winner.innerHTML = "🦾 Player 1 Wins";
    } else if (dice1 < dice2) {
        winner.innerHTML = "Player 2 Wins 🦾";
    } else {
        winner.innerHTML = "⚔  It's a DRAW ⚔ "

    }
}

diceImg();





