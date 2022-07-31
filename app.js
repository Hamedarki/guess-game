"use strict"


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector(".check").addEventListener("click", function() {
    const guess = Number((document.querySelector(".guess").value));


    if (!guess) {
        if (score > 1) {
            document.querySelector(".message").textContent = "No Number!!";
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            document.querySelector(".score").textContent = `you are lost the game💥`
            document.querySelector(".section").style.background = "red";

        }


    } else if (guess === secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Correct Number🎉🎉";
            document.querySelector(".number").style.display = "none";
            document.querySelector(".icon").style.display = "block";
            document.querySelector(".section").style.background = "#60b347";
        } else {
            document.querySelector(".score").textContent = `its late my friend💔`
            document.querySelector(".section").style.background = "red";
        }

    } else if (guess >= 21) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High between 1 to 20 📈";
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            document.querySelector(".score").textContent = `you are lost the game💥`;
            document.querySelector(".section").style.background = "red";

        }


    } else if (guess < 1) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Not Under Zero📈";
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            document.querySelector(".score").textContent = `you are lost the game💥`;
            document.querySelector(".section").style.background = "red";


        }


    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High 📈";
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            document.querySelector(".score").textContent = `you are lost the game💥`;
            document.querySelector(".section").style.background = "red";

        }


    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low📉";
            score--;
            document.querySelector(".score").textContent = `score: ${score}`;
        } else {
            document.querySelector(".score").textContent = `you are lost the game💥`;
            document.querySelector(".section").style.background = "red";

        }

    }
});