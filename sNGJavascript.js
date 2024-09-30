// Secret favorite number between 1 and 5
const secretNumber = Math.floor(Math.random() * 5) + 1;
let points = 0;
let userGuess;

while (true) {
    // Prompts the user for their favorite number
    userGuess = prompt("Enter your favorite number between 1 and 5:");
    
    // Checks if the input is a valid number
    if (!isNaN(userGuess) && userGuess !== null && userGuess !== "") {
        userGuess = Number(userGuess);
        
        // Checks if the guess is equal to the secret number
        if (userGuess === secretNumber) {
            points = 10;
            alert("Congratulations! You guessed the correct number! Here are 10 points!");
        } else {
            alert("Sorry, that wasn't the correct number. You earned 0 points.");
        }
        break;
    } else {
        alert("Please enter a valid number between 1 and 5.");
    }
}

// Displays the user's points
document.write("<p>You've earned " + points + " points.</p>");
