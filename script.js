const questions = [
    { question: "Would you rather live in the city or the countryside?", option1: "City", option2: "Countryside" },
    { question: "Would you rather be able to fly or be invisible?", option1: "Fly", option2: "Invisible" },
    { question: "Would you rather have a pet dragon or a pet unicorn?", option1: "Dragon", option2: "Unicorn" },
    { question: "Would you rather have unlimited money or unlimited time?", option1: "Unlimited Money", option2: "Unlimited Time" },
    { question: "Would you rather be a famous actor or a famous musician?", option1: "Actor", option2: "Musician" },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    document.getElementById("option1").innerText = questionObj.option1;
    document.getElementById("option2").innerText = questionObj.option2;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("percentage").innerText = "";
}

document.getElementById("option1").addEventListener("click", () => handleAnswer("Option 1"));
document.getElementById("option2").addEventListener("click", () => handleAnswer("Option 2"));

function handleAnswer(answer) {
    document.getElementById("selected-answer").innerText = answer;

    const percentage = Math.floor(Math.random() * 100) + "%";
    document.getElementById("percentage").innerText = `Option selected: ${percentage}`;

    document.getElementById("result").classList.remove("hidden");

    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestion();
    }, 2000);
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}

// Initialize
displayQuestion();
