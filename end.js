const finalScore = localStorage.getItem("mostRecentScore");
const correctAnswers = localStorage.getItem("correctAnswers");
const incorrectAnswers = localStorage.getItem("incorrectAnswers");

function Level(score) {
    if (score <= 2) return "A1";
    if (score <= 4) return "A2";
    if (score <= 6) return "B1";
    if (score <= 8) return "B2";
    if (score <= 9) return "C1";
    return "C2";
}

const level = Level(parseInt(finalScore) || 0);

document.getElementById("finalScore").innerText = finalScore;
document.getElementById("correct-answers").innerText = correctAnswers;
document.getElementById("incorrect-answers").innerText = incorrectAnswers;
document.getElementById("level").innerText = level;

document.getElementById("homeButton").addEventListener("click", () => {
    localStorage.setItem("showScore", "true");
    //                      key        value
});

const congratTitle = document.getElementById("congratTitle");

if(finalScore <= 5){
    congratTitle.innerText = "Ops!";
}