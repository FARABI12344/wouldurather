* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    transition: background-color 0.5s ease;
}

.game-container {
    padding: 50px;
    border-radius: 15px;
    width: 700px;
    animation: glow 3s infinite alternate;
}

h1 {
    margin-bottom: 20px;
    font-size: 48px;
}

.option-btn {
    width: 100%;
    padding: 25px;
    margin: 20px 0;
    border: none;
    border-radius: 12px;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.option-btn:hover {
    transform: scale(1.05);
}

.option-btn:active {
    transform: scale(0.95);
}

#result {
    font-size: 24px;
    margin-top: 20px;
}

.hidden {
    display: none;
}

#mode-toggle {
    margin-top: 30px;
}

body.dark-mode {
    background-color: #222;
}

body.dark-mode .game-container {
    background: linear-gradient(45deg, purple, darkpink);
}

body.light-mode {
    background-color: #fff;
}

body.light-mode .game-container {
    background: linear-gradient(45deg, #ff99cc, #d599ff);
}

@keyframes glow {
    0% { box-shadow: 0 0 15px 5px rgba(255, 0, 255, 0.5); }
    100% { box-shadow: 0 0 30px 10px rgba(255, 20, 147, 0.8); }
}
