const questions = [
    {
        question: "Would you rather live in the city or the countryside?",
        option1: "City",
        option2: "Countryside",
        percentage1: 60, // Custom percentage for option 1
        percentage2: 40  // Custom percentage for option 2
    },
    {
        question: "Would you rather be able to fly or be invisible?",
        option1: "Fly",
        option2: "Invisible",
        percentage1: 70, // Custom percentage for option 1
        percentage2: 30  // Custom percentage for option 2
    },
    {
        question: "Would you rather have a pet dragon or a pet unicorn?",
        option1: "Dragon",
        option2: "Unicorn",
        percentage1: 55, // Custom percentage for option 1
        percentage2: 45  // Custom percentage for option 2
    },
    {
        question: "Would you rather have unlimited money or unlimited time?",
        option1: "Unlimited Money",
        option2: "Unlimited Time",
        percentage1: 80, // Custom percentage for option 1
        percentage2: 20  // Custom percentage for option 2
    },
    {
        question: "Would you rather be a famous actor or a famous musician?",
        option1: "Actor",
        option2: "Musician",
        percentage1: 50, // Custom percentage for option 1
        percentage2: 50  // Custom percentage for option 2
    },
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
        showPopup("⚠️ Error: Please wait before selecting again.");
        return;
    }

    canAnswer = false;

    // Get the predefined percentages for the current question
    const percentage1 = questions[currentQuestionIndex].percentage1;
    const percentage2 = questions[currentQuestionIndex].percentage2;

    // Update the text of both options with percentages
    document.getElementById("option1").innerText = `${questions[currentQuestionIndex].option1} - ${percentage1}%`;
    document.getElementById("option2").innerText = `${questions[currentQuestionIndex].option2} - ${percentage2}%`;

    // Show the selected answer and percentage
    document.getElementById("selected-answer").innerText = answer;
    document.getElementById("percentage").innerText = `Chosen by: ${answer === questions[currentQuestionIndex].option1 ? percentage1 : percentage2}% of users`;
    document.getElementById("result").classList.remove("hidden");

    // Show success popup after 2 seconds
    setTimeout(() => {
        showPopup("✅ Loaded Next Question");
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestion();
        canAnswer = true;
    }, 2000);
}

// Show Inline Popup
function showPopup(message) {
    const popup = document.getElementById("inline-popup");
    const popupText = document.getElementById("popup-text");
    popupText.innerText = message;
    popup.classList.remove("hidden");
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3000); // Fade out after 3 seconds
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
