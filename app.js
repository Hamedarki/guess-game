"use strict"


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message
}

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".section").style.background = "#222";
    document.querySelector(".score").textContent = `score: ${score}`;
    document.querySelector(".number").style.display = "block";
    document.querySelector(".icon").style.display = "none";
    document.querySelector(".guess").value = '';

})

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number((document.querySelector(".guess").value));


    if (!guess) {
        if (score > 1) {
            displayMessage("No Number!!");
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            displayMessage(`you are lost the game💥`);
            document.querySelector(".section").style.background = "red";

        }


    } else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highScore").textContent = `high Score: ${highScore}`;
        }
        if (score > 1) {
            displayMessage("Correct Number🎉🎉");
            document.querySelector(".number").style.display = "none";
            document.querySelector(".icon").style.display = "block";
            document.querySelector(".section").style.background = "#60b347";

        } else {
            displayMessage(`its late my friend💔`);
            document.querySelector(".section").style.background = "red";
        }

    } else if (guess >= 21) {
        if (score > 1) {
            displayMessage("Too High between 1 to 20 📈");
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            displayMessage(`you are lost the game💥`);
            document.querySelector(".section").style.background = "red";

        }


    } else if (guess < 1) {
        if (score > 1) {
            displayMessage("Not Under Zero📈");
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            displayMessage(`you are lost the game💥`);
            document.querySelector(".section").style.background = "red";


        }


    } else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage("Too High 📈");
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            displayMessage(`you are lost the game💥`);
            document.querySelector(".section").style.background = "red";

        }


    } else if (guess < secretNumber) {
        if (score > 1) {
            displayMessage("Too low📉");
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            displayMessage(`you are lost the game💥`);
            document.querySelector(".section").style.background = "red";

        }

    }
});