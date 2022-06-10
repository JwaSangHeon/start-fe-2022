import { showQuiz, showStudy } from "./show.js";
import "./app.css";

const $study_btn = document.querySelector("#study-btn");
const $quiz_btn = document.querySelector("#quiz-btn");
const $spinner_study = document.querySelector("#spinner-study");
const $spinner_quiz = document.querySelector("#spinner-quiz");

showStudy("./class.json", $spinner_study, "all");
showQuiz("./quiz.json", $spinner_quiz, "all");

const toggleActive = (event) => {
  for (let i = 0; i < event.target.parentNode.children.length; i++) {
    event.target.parentNode.children[i].classList.remove("active");
  }
  event.target.classList.add("active");
}; //선택된 버튼에만 active 속성 추가

const clickStudyBtn = (e) => {
  toggleActive(e);
  if (e.target.innerText === "모두") {
    showStudy("./class.json", $spinner_study, "all");
  } else if (e.target.innerText === "도움링크") {
    showStudy("./class.json", $spinner_study, "link");
  } else if (e.target.innerText === "git") {
    showStudy("./class.json", $spinner_study, "git");
  } else if (e.target.innerText === "최신순") {
    showStudy("./class.json", $spinner_study, "sort");
  }
};
const clickQuizBtn = (e) => {
  toggleActive(e);
  if (e.target.innerText === "모두") {
    showQuiz("./quiz.json", $spinner_quiz, "all");
  } else if (e.target.innerText === "git") {
    showQuiz("./quiz.json", $spinner_quiz, "git");
  }
};

$study_btn.addEventListener("click", clickStudyBtn);
$quiz_btn.addEventListener("click", clickQuizBtn);
