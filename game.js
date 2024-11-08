const question =  document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestions = {};
let acceptingAnswers = true;
let score =  0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Quelle est la capitale de la France ?",
        choice1: "Lyon",
        choice2: "Marseille",
        choice3: "Paris",
        choice4: "Nice",
        answer: 3
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        choice1: "Victor Hugo",
        choice2: "Molière",
        choice3: "Émile Zola",
        choice4: "Albert Camus",
        answer: 1
    },
    {
        question: "Quelle est la couleur du drapeau français ?",
        choice1: "Bleu, Blanc, Rouge",
        choice2: "Rouge, Jaune, Noir",
        choice3: "Vert, Blanc, Rouge",
        choice4: "Bleu, Jaune, Rouge",
        answer: 1
    },
    {
        question: "Quelle est la devise de la République française ?",
        choice1: "Liberté, Égalité, Fraternité",
        choice2: "Paix, Amour, Unité",
        choice3: "Égalité, Justice, Liberté",
        choice4: "Force, Courage, Fraternité",
        answer: 1
    },
    {
        question: "Quel est le plus long fleuve de France ?",
        choice1: "La Seine",
        choice2: "La Loire",
        choice3: "Le Rhône",
        choice4: "La Garonne",
        answer: 2
    },
    {
        question: "Quel célèbre monument se trouve à Paris ?",
        choice1: "La Tour Eiffel",
        choice2: "Le Colisée",
        choice3: "Le Big Ben",
        choice4: "La Sagrada Familia",
        answer: 1
    },
    {
        question: "Quelle est la spécialité culinaire française faite de pâte feuilletée ?",
        choice1: "La pizza",
        choice2: "La baguette",
        choice3: "Le croissant",
        choice4: "Le taco",
        answer: 3
    },
    {
        question: "Quelle est la langue officielle de la France ?",
        choice1: "L'allemand",
        choice2: "Le français",
        choice3: "L'anglais",
        choice4: "L'espagnol",
        answer: 2
    },
    {
        question: "Quel est le plus haut sommet de France ?",
        choice1: "Le Mont Everest",
        choice2: "Le Mont Blanc",
        choice3: "Le Mont Fuji",
        choice4: "Le Kilimandjaro",
        answer: 2
    },
    {
        question: "Quel est le nom du président actuel de la France ?",
        choice1: "Emmanuel Macron",
        choice2: "Nicolas Sarkozy",
        choice3: "François Hollande",
        choice4: "Jacques Chirac",
        answer: 1
    }
];

const correctBonus = 1;
const maxQuestions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
        localStorage.setItem("mostRecentScore", score);
        // go to the end of the page
        return window.location.assign("/end.html")
    }

    questionCounter++;
    questionCounterText.innerHTML = questionCounter + "/" + maxQuestions;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestions = availableQuestions[questionIndex];
    question.innerHTML = currentQuestions.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestions['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // const classToApply = 'incorrect';
        //     if(selectedAnswer == currentQuestions.answer) {
        //         classToApply = 'correct';
        //     }

        // different syntax                                           if          else
        const classToApply = selectedAnswer == currentQuestions.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        const choiceButton = selectedChoice.closest("button");
        choiceButton.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 2000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};




startGame();
