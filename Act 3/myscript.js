// Get elements
const guessElement = document.querySelector('.guess');
const correctGuess = document.querySelector('.correctGuess');
const attemptCounterElement = document.querySelector('.attemptCounter');
const promptElement = document.querySelector('.prompt');
const inputElement = document.querySelector('.textClass');
const submitButton = document.querySelector('.button1');

// Generate a random number between 1 and 100

let attempts = 0;

// Function to handle button click
function buttonClicked() {

	let randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(inputElement.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        promptElement.textContent = "Invalid input: Please Input number between 1 - 10";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        guessElement.textContent = `You guessed: ${userGuess}`;
        promptElement.textContent = `Congratulations! ${userGuess} is the correct number.`;
        promptElement.style.color = 'green';
        inputElement.disabled = true;
        submitButton.disabled = true;
    } else if (userGuess < randomNumber) {
        guessElement.textContent = `You guessed: ${userGuess}`;
        promptElement.textContent = `Guess is too low. Try Again`;
    } else {
        guessElement.textContent = `You guessed: ${userGuess}`;
        promptElement.textContent = `Guess is too high. Try Again`;
    }

    correctGuess.textContent = "Correct Number: " + randomNumber;
    attemptCounterElement.textContent = `Number of attempts: ${attempts}`;

    inputElement.value = "";
}
