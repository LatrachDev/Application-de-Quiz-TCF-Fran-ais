const finalScore = localStorage.getItem("mostRecentScore");
const correctAnswers = localStorage.getItem("correctAnswers");
const incorrectAnswers = localStorage.getItem("incorrectAnswers");

// Display the value of final score and correct answers, incorrect
document.getElementById("finalScore").innerText = finalScore ? finalScore : 0;
document.getElementById("correct-answers").innerText = correctAnswers ? correctAnswers : 0;
document.getElementById("incorrect-answers").innerText = incorrectAnswers ? incorrectAnswers : 0;

// // check if there is a previous score (last score)
// const lastScore = localStorage.getItem("lastScore");

// if (lastScore !== null && lastScore !== finalScore) {
//     // if last score exist , display it
//     document.getElementById("lastScore").innerText = lastScore;
//     document.getElementById("last-score-container").style.display = "block !important"
// } else {
//     // If it doesn’t exist, store the current score as "lastScore" for the next game
//     localStorage.setItem("lastScore", finalScore);
// }


function Level(score) {
    if (score <= 2) return "A1";
    if (score <= 4) return "A2";
    if (score <= 6) return "B1";
    if (score <= 8) return "B2";
    if (score <= 9) return "C1";
    return "C2";
}

const score = parseInt(localStorage.getItem("mostRecentScore")) || 0;
const level = Level(score);

document.getElementById("finalScore").innerText = score;
document.getElementById("level").innerText = level;