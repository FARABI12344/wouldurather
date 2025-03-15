// Customize your questions here
const questions = [
    { question: "Would you rather live in the city or the countryside?", option1: "City", option2: "Countryside" },
    { question: "Would you rather be able to fly or be invisible?", option1: "Fly", option2: "Invisible" },
    { question: "Would you rather have a pet dragon or a pet unicorn?", option1: "Dragon", option2: "Unicorn" },
    { question: "Would you rather have unlimited money or unlimited time?", option1: "Unlimited Money", option2: "Unlimited Time" },
    { question: "Would you rather be a famous actor or a famous musician?", option1: "Actor", option2: "Musician" },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let selectedAnswer = "";

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    document.getElementById("option1").innerText = questionObj.option1;
    document.getElementById("option2").innerText = questionObj.option2;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("next-button").classList.add("hidden");
    document.getElementById("percentage").innerText = "";
}

document.getElementById("option1").addEventListener("click", () => handleAnswer("Option 1"));
document.getElementById("option2").addEventListener("click", () => handleAnswer("Option 2"));

function handleAnswer(answer) {
    selectedAnswer = answer;
    document.getElementById("selected-answer").innerText = answer;

    // Show percentage (customizable as needed)
    const percentage = Math.floor(Math.random() * 100) + "%";
    document.getElementById("percentage").innerText = `Option selected: ${percentage}`;

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("next-button").classList.remove("hidden");

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            currentQuestionIndex = 0;
            displayQuestion();
        }
    }, 2000); // Wait 2 seconds before showing the next question
}

document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        currentQuestionIndex = 0;
        displayQuestion();
    }
});

// Initialize the game by displaying the first question
displayQuestion();

// Toggle Dark/Light Mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
}
