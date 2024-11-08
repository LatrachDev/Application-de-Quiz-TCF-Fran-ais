const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerHTML = mostRecentScore;


function Level(score) {
    if (score <= 4) return "A1";
    if (score <= 11) return "A2";
    if (score <= 15) return "B1";
    if (score <= 8) return "B2";
    if (score <= 9) return "C1";
    return "C2";
}