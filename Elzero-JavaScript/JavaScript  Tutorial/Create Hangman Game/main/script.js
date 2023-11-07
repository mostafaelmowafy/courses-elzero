// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

    // Create Span
    let span = document.createElement("span");

    // Create Letter Text Node
    let theLetter = document.createTextNode(letter);

    // Append The Letter To Span
    span.appendChild(theLetter);

    // Add Class On Span
    span.className = 'letter-box';

    // Append Span To The Letters Container
    lettersContainer.appendChild(span);

});

// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];


// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letter Is Space
    if (letter === ' ') {

        // Add Class To The Span
        emptySpan.className = 'with-space';
    }

    // Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
});  

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Set Correct Attempts
let correctAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
    let theStatus = false;
    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");  
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        theChosenWord.forEach((wordLetter, WordIndex) => {
            if (theClickedLetter == wordLetter){
                theStatus = true;

                // Increase The Correct Attempts
                correctAttempts++
                guessSpans.forEach((span, spanIndex) => {
                    if(spanIndex === WordIndex){
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });
        // If Letter Is Wrong
        if (theStatus !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++;
    
            // Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // Play Fail Sound
            document.getElementById("fail").play();

            if (wrongAttempts === 8) {
                GameOver();
                lettersContainer.classList.add("finished");
            }
        }else{
            // Play success Sound
            document.getElementById("success").play();
            console.log(theChosenWord.length)
            
            if(theChosenWord.length == correctAttempts){
                successEnd()
            }
        }
    }
});

function successEnd(){
    // Create Text
    let divSuccess = document.createElement("div");

    // Create Text
    let SuccessText = document.createTextNode(`Congratulation, The Word Is ${randomValueValue}`)

    // Append Text To Div
    divSuccess.appendChild(SuccessText);

    // Add Class On Div
    divSuccess.className = 'popup';

    // Append To The Body
    document.body.appendChild(divSuccess);
}
function GameOver(){
    // Create Text
    let div = document.createElement("div");

    // Create Text
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`)

    // Append Text To Div
    div.appendChild(divText);

    // Add Class On Div
    div.className = 'popup';

    // Append To The Body
    document.body.appendChild(div);
}