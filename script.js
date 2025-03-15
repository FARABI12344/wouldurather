const questions = [
    { question: "Would you rather live in the city or the countryside?", option1: "City", option2: "Countryside" },
    { question: "Would you rather be able to fly or be invisible?", option1: "Fly", option2: "Invisible" },
    { question: "Would you rather have a pet dragon or a pet unicorn?", option1: "Dragon", option2: "Unicorn" },
    { question: "Would you rather have unlimited money or unlimited time?", option1: "Unlimited Money", option2: "Unlimited Time" },
    { question: "Would you rather be a famous actor or a famous musician?", option1: "Actor", option2: "Musician" },
];

let currentQuestionIndex = 0;
let canAnswer = true;

// Load Question
function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    document.getElementById("option1").innerText = questionObj.option1;
    document.getElementById("option2").innerText = questionObj.option2;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("percentage").innerText = "";
}

// Handle Answer Selection
function handleAnswer(answer) {
    if (!canAnswer) {
        showErrorPopup();
        return;
    }

    canAnswer = false;
    document.getElementById("selected-answer").innerText = answer;
    const percentage = Math.floor(Math.random() * 100);
    document.getElementById("percentage").innerText = `Chosen by: ${percentage}% of users`;

    // Update the selected option text with the percentage
    if (answer === questions[currentQuestionIndex].option1) {
        document.getElementById("option1").innerText = `${questions[currentQuestionIndex].option1} - ${percentage}%`;
    } else {
        document.getElementById("option2").innerText = `${questions[currentQuestionIndex].option2} - ${percentage}%`;
    }

    document.getElementById("result").classList.remove("hidden");

    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestion();
        showSuccessPopup();
        canAnswer = true;
    }, 2000);
}

// Show Error Popup
function showErrorPopup() {
    const errorPopup = document.getElementById("error-popup");
    errorPopup.classList.remove("hidden");
    setTimeout(() => {
        errorPopup.classList.add("hidden");
    }, 2000);
}

// Show Success Popup
function showSuccessPopup() {
    const successPopup = document.getElementById("success-popup");
    successPopup.classList.remove("hidden");
    setTimeout(() => {
        successPopup.classList.add("hidden");
    }, 2000);
}

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Apply Theme on Load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme + "-mode");
    document.getElementById("mode-toggle").checked = savedTheme === "dark";

    displayQuestion();
});

// Event Listeners
document.getElementById("mode-toggle").addEventListener("change", toggleMode);
document.getElementById("option1").addEventListener("click", (e) => handleAnswer(e.target.innerText));
document.getElementById("option2").addEventListener("click", (e) => handleAnswer(e.target.innerText));
