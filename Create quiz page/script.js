let data = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Phyton", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does CSS Stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheet",
      "Cascading Simple Sheet",
      "Cars Suv Sailboats",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Mototboats Lamborghinis",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    answers: [1996, 1995, 1998, "none of the above"],
    correctAnswer: "1995",
  },
];
let currentQuestion = 0;
let userResponse = 0;
const body = document.querySelector("body");
const pageContainer = document.createElement("div");
pageContainer.className = "c-container";
const titleQuestion = document.createElement("h2");
const bigWrap = document.createElement("div");
bigWrap.className = "test0";
bigWrap.appendChild(titleQuestion);
const smallWrap = document.createElement("div");
smallWrap.className = "test1";

const submitBtn = document.createElement("button");
submitBtn.textContent = "submit";

bigWrap.appendChild(smallWrap);
pageContainer.appendChild(bigWrap);
pageContainer.appendChild(submitBtn);
body.appendChild(pageContainer);

function renderQuestion(currentQuestion) {
  titleQuestion.textContent = data[currentQuestion].question;

  smallWrap.innerHTML = "";
  for (let i = 0; i < data[currentQuestion].answers.length; i++) {
    const wraper = document.createElement("div");
    wraper.className = "c-wrap";
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.id = "test";
    radioInput.name = "radioBtn";
    radioInput.value = data[currentQuestion].answers[i];
    const label = document.createElement("label");
    label.textContent = radioInput.value;
    wraper.appendChild(radioInput);
    wraper.appendChild(label);

    smallWrap.appendChild(wraper);
  }
}

renderQuestion(currentQuestion);

submitBtn.addEventListener("click", () => {
  let checkBtn = document.querySelector(`input[type="radio"]:checked`);
  if (checkBtn) {
    if (checkBtn.value === data[currentQuestion].correctAnswer) {
      userResponse += 1;
      console.log(userResponse);
    }
    currentQuestion += 1;
    if (currentQuestion === data.length) {
      //pagina de final
      renderFinalPage();
    } else {
      renderQuestion(currentQuestion);
    }
  } else {
    if (currentQuestion === data.length) {
      resetQuiz();
    } else {
      alert("You have to choose an answer!");
    }
  }
});

function resetQuiz() {
  currentQuestion = 0;
  userResponse = 0;
  submitBtn.textContent = "submit";
  renderQuestion(currentQuestion);
}

function renderFinalPage() {
  titleQuestion.textContent = `You answered ${userResponse}/4 questions correctly`;
  submitBtn.textContent = "reset";
  smallWrap.innerHTML = "";
}
