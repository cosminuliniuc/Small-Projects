const alphabet = [
  {letter: "a", pressed: false},
  {letter: "b", pressed: false},
  {letter: "c", pressed: false},
  {letter: "d", pressed: false},
  {letter: "e", pressed: false},
  {letter: "f", pressed: false},
  {letter: "g", pressed: false},
  {letter: "h", pressed: false},
  {letter: "i", pressed: false},
  {letter: "j", pressed: false},
  {letter: "k", pressed: false},
  {letter: "l", pressed: false},
  {letter: "m", pressed: false},
  {letter: "n", pressed: false},
  {letter: "o", pressed: false},
  {letter: "p", pressed: false},
  {letter: "q", pressed: false},
  {letter: "r", pressed: false},
  {letter: "s", pressed: false},
  {letter: "t", pressed: false},
  {letter: "u", pressed: false},
  {letter: "w", pressed: false},
  {letter: "x", pressed: false},
  {letter: "y", pressed: false},
  {letter: "z", pressed: false},
];

let words = ["absolute", "abstract", "academic"];
const wordGame = renderWordPlay(words);
let currentHearts = 6;
function renderWordPlay(arr) {
  const indexWord = Math.floor(Math.random() * arr.length);
  return arr[indexWord];
}

const body = document.querySelector("body");
const container = document.createElement("body");
container.className = "c-container";
const headerElement = document.createElement("header");
headerElement.className = "c-header";
container.appendChild(headerElement);
const titleElement = renderDivElement("c-title");
container.appendChild(titleElement);
const lettersElement = renderDivElement("c-letter-element");
container.appendChild(lettersElement);
const alphabetElement = renderDivElement("c-alphabet-container");
container.appendChild(alphabetElement);

body.appendChild(container);

function renderDivElement(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function renderHeartIcons() {
  const iconHeader = document.createElement("div");
  iconHeader.id = "id-heart";
  for (let i = 0; i < 6; i++) {
    const heartIcons = document.createElement("ion-icon");
    heartIcons.setAttribute("name", "heart");
    iconHeader.appendChild(heartIcons);
  }

  headerElement.appendChild(iconHeader);
}
renderHeartIcons();

function renderPoints() {
  const pointsHeader = document.createElement("div");
  const points = document.createElement("p");
  points.className = "c-points";
  points.textContent = " 0 point(s)";
  pointsHeader.appendChild(points);
  headerElement.appendChild(pointsHeader);
}
renderPoints();

function renderGameName() {
  const titleGame = document.createElement("h2");
  titleGame.textContent = "hangman";
  titleGame.className = "c-game";
  const gameDescription = document.createElement("p");
  gameDescription.textContent = "guess the word";
  gameDescription.classList.add("c-description");
  titleElement.appendChild(titleGame);
  titleElement.appendChild(gameDescription);
}
renderGameName();

function renderResponseCase() {
  for (let i = 0; i < wordGame.length; i++) {
    const letter = document.createElement("div");
    letter.className = "c-letter";
    letter.id = "id-letter" + i;
    lettersElement.appendChild(letter);
  }
}
renderResponseCase();

function renderLetters(alphabet) {
  alphabet.forEach((element) => {
    const alphabetLetter = document.createElement("div");
    alphabetLetter.className = "c-alphabet";
    alphabetLetter.textContent = element.letter;
    alphabetElement.appendChild(alphabetLetter);
    alphabetLetter.addEventListener("click", () => {
      const clickedLetter = alphabetLetter.textContent;

      if (!element.pressed) {
        element.pressed = true;

        if (wordGame.includes(clickedLetter)) {
          alphabetLetter.style.backgroundColor = "green";
        } else {
          currentHearts--;
          alphabetLetter.style.backgroundColor = "red";
          const iconHeader = document.getElementById("id-heart");
          iconHeader.innerHTML = "";
          for (let i = 0; i < 6; i++) {
            const heartIcons = document.createElement("ion-icon");
            if (i < currentHearts) {
              heartIcons.setAttribute("name", "heart");
            } else if (i < 1) {
              iconHeader.textContent = "You lost";
            } else {
              heartIcons.setAttribute("name", "heart-dislike");
            }

            iconHeader.appendChild(heartIcons);
          }
        }
        for (let i = 0; i < wordGame.length; i++) {
          if (wordGame[i] === clickedLetter) {
            document.querySelector("#id-letter" + i).textContent =
              clickedLetter;
          }
        }
      }
    });
  });
}
renderLetters(alphabet);
