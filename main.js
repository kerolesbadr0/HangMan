// Letters
let letters = "abcdefghijklmonpqrstuvwxyz";
// Array From Letters
let arrayLetters = Array.from(letters);
// Select Letters Container
let lettersContainer = document.getElementById("letters");
// Generate Letters
arrayLetters.forEach((e) => {
  // Create Span
  let span = document.createElement("span");
  // Create Text Node
  let textNodeSpan = document.createTextNode(e);
  // Append The Letter To Span
  span.appendChild(textNodeSpan);
  // Add Class To Span
  span.className = "letters-span";
  //   Append Span To Letters To lettersContainer
  lettersContainer.appendChild(span);
});
// Select Guess Span
let guessSpans = document.querySelectorAll(".letters-guess span");
// Random proparty
let words = {
  programing: [
    "Javascript",
    "Python",
    "Go",
    "Java",
    "Kotlin",
    "PHP",
    "C#",
    "Swift",
    "R",
    "Ruby",
  ],
  movies: ["Prestige", "Inception", "Parasite", "Intersteller", "Whiplash"],
  people: ["Einstiein", "Hitchcock", "Alexander", "Cleopatra", "Ghandi"],
  countries: ["Syria", "Plastine", "Yeman", "Egypt", "Bahrain", "Qatar"],
};
// Get Random Pro
let allKeys = Object.keys(words);
let ranProNum = Math.floor(Math.random() * allKeys.length);
let ranProName = allKeys[ranProNum];
let ranProValue = words[ranProName];
let ranValueNum = Math.floor(Math.random() * ranProValue.length);
let ranValueValue = ranProValue[ranValueNum];
// Set Word
document.getElementById("word").innerHTML = `${ranProName}`;
// Select Letters Guess
let lettersGuess = document.querySelector(".letters-guess");
// Convert Word To Array
let lettersAndSpace = Array.from(ranValueValue);
// Create Spans Depend On Words
lettersAndSpace.forEach((e) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");
  lettersGuess.appendChild(emptySpan);
});

// Select Guess Span
let guessSpan = document.querySelectorAll(".letters-guess span");


// Set Wrong Attempts
let wrongAttempts = 0;

// Select Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  // Set Status
  let thestatus = false;
  if (e.target.className === "letters-span") {
    e.target.classList.add("clicked");
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(ranValueValue.toLowerCase());
    // console.log(lettersAndSpace)

    theChosenWord.forEach((wordLetter, index) => {
      if (theClickedLetter == wordLetter) {
        thestatus = true;
        console.log(index);
        // Loop All Guess
        guessSpan.forEach((span, spanIndex) => {
          if (index === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });

    // If Letter Is Wrong
    if (thestatus !== true) {
      // Increase Wrong
      wrongAttempts++;
      // Add Class On Draw Ele
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      // Fail Sound
      document.getElementById("fail").play();
      if (wrongAttempts === 8) {
        function endGame() {
          let div = document.createElement("div");
          let divText = document.createTextNode(
            `Game Over , The Word Is ${ranValueValue}`
          );
          div.appendChild(divText);
          div.className = "popup";
          document.body.appendChild(div);
        }
        endGame()
        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

