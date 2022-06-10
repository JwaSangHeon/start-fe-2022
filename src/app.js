const $study_btn = document.querySelector("#study-btn");
const $quiz_btn = document.querySelector("#quiz-btn");
const $spinner_study = document.querySelector("#spinner-study");
const $spinner_quiz = document.querySelector("#spinner-quiz");
const $study = document.querySelector("#study");
const $quiz = document.querySelector("#quiz");

const loadingStudy = () => {
  $spinner_study.classList.remove("hidden");
  setTimeout(() => {
    $spinner_study.classList.add("hidden");
  }, 1000);
};
const loadingQuiz = () => {
  $spinner_quiz.classList.remove("hidden");
  setTimeout(() => {
    $spinner_quiz.classList.add("hidden");
  }, 1000);
};

const studyInit = () => {
  loadingStudy();
  setTimeout(() => {
    fetch("./class.json")
      .then((res) =>
        res.json().then((datas) =>
          datas.map((data, index) => {
            let linkHtml = "";
            data.links.forEach((link, index) => {
              linkHtml += `<a href=${link} class="badge bg-secondary link">${
                index + 1
              }</a>`;
            });

            let docUrlHtml = data.docUrl
              ? `<a href=${data.docUrl} class="badge bg-secondary">문서</a>`
              : "";

            let gitUrlHtml = data.gitUrl
              ? `<a href=${data.gitUrl}>git</a>`
              : "";

            const html = `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${data.title}</td>
        <td>
          ${docUrlHtml}
        </td>
        <td>
          ${linkHtml}
        </td>
        <td>${data.date}</td>
        <td>
          ${gitUrlHtml}
        </td>
      </tr>
      `;
            $study.innerHTML += html;
          })
        )
      )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, 1000);
}; //모두: class.json 모든 속성 표시

const havingLink = () => {
  loadingStudy();
  setTimeout(() => {
    fetch("./class.json")
      .then((res) =>
        res.json().then((datas) =>
          datas.map((data, index) => {
            let linkHtml = "";
            data.links.forEach((link, index) => {
              linkHtml += `<a href=${link} class="badge bg-secondary link">${
                index + 1
              }</a>`;
            });

            let docUrlHtml = data.docUrl
              ? `<a href=${data.docUrl} class="badge bg-secondary">문서</a>`
              : "";

            let gitUrlHtml = data.gitUrl
              ? `<a href=${data.gitUrl}>git</a>`
              : "";

            if (data.links.length >= 1) {
              const html = `
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${data.title}</td>
                <td>
                  ${docUrlHtml}
                </td>
                <td>
                  ${linkHtml}
                </td>
                <td>${data.date}</td>
                <td>
                  ${gitUrlHtml}
                </td>
              </tr>
            `;

              $study.innerHTML += html;
            }
          })
        )
      )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, 1000);
}; //도움링크: class.json에서 links.length>0 이상인 속성들만 표시

const havingGit = () => {
  loadingStudy();
  setTimeout(() => {
    fetch("./class.json")
      .then((res) =>
        res.json().then((datas) =>
          datas.map((data, index) => {
            let linkHtml = "";
            data.links.forEach((link, index) => {
              linkHtml += `<a href=${link} class="badge bg-secondary link">${
                index + 1
              }</a>`;
            });

            let docUrlHtml = data.docUrl
              ? `<a href=${data.docUrl} class="badge bg-secondary">문서</a>`
              : "";

            let gitUrlHtml = data.gitUrl
              ? `<a href=${data.gitUrl}>git</a>`
              : "";

            if (gitUrlHtml) {
              const html = `
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${data.title}</td>
                <td>
                  ${docUrlHtml}
                </td>
                <td>
                  ${linkHtml}
                </td>
                <td>${data.date}</td>
                <td>
                  ${gitUrlHtml}
                </td>
              </tr>
            `;

              $study.innerHTML += html;
            }
          })
        )
      )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, 1000);
}; //git: 실습한 git주소가 있는 속성만 표시

const sortingData = () => {
  loadingStudy();
  setTimeout(() => {
    fetch("./class.json")
      .then((res) =>
        res.json().then((datas) =>
          datas
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((data, index) => {
              let linkHtml = "";
              data.links.forEach((link, index) => {
                linkHtml += `<a href=${link} class="badge bg-secondary link">${
                  index + 1
                }</a>`;
              });

              let docUrlHtml = data.docUrl
                ? `<a href=${data.docUrl} class="badge bg-secondary">문서</a>`
                : "";

              let gitUrlHtml = data.gitUrl
                ? `<a href=${data.gitUrl}>git</a>`
                : "";

              const html = `
              <tr>
                <th scope="row">${datas.length - index}</th>
                <td>${data.title}</td>
                <td>
                  ${docUrlHtml}
                </td>
                <td>
                  ${linkHtml}
                </td>
                <td>${data.date}</td>
                <td>
                  ${gitUrlHtml}
                </td>
              </tr>
            `;
              $study.innerHTML += html;
            })
        )
      )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, 1000);
};

const quizInit = () => {
  loadingQuiz();
  setTimeout(() => {
    fetch("./quiz.json")
      .then((res) =>
        res.json().then((datas) =>
          datas.map((data) => {
            const html = `
            <tr>
              <td>${data.title}</td>
              <td>
                <a
                  class="badge bg-secondary"
                  href="${data.docUrl}"
                  >문서</a
                >
              </td>
              <td><a href="${data.previewUrl}">보기</a></td>
              <td><a href="${data.gitUrl}">git</a></td>
            </tr>
          `;
            $quiz.innerHTML += html;
          })
        )
      )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, 1000);
}; //모두: class.json 모든 속성 표시

const quizHavingGit = () => {
  loadingQuiz();
  setTimeout(() => {
    fetch("./quiz.json")
      .then((res) =>
        res.json().then((datas) =>
          datas.map((data) => {
            let gitUrlHtml = data.gitUrl
              ? `<a href=${data.gitUrl}>git</a>`
              : "";

            if (gitUrlHtml) {
              const html = `
              <tr>
                <td>${data.title}</td>
                <td>
                  <a
                    class="badge bg-secondary"
                    href="${data.docUrl}"
                    >문서</a
                  >
                </td>
                <td><a href="${data.previewUrl}">보기</a></td>
                <td>${gitUrlHtml}</td>
              </tr>
            `;

              $quiz.innerHTML += html;
            }
          })
        )
      )
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }, 1000);
}; //git: 실습한 git주소가 있는 속성만 표시

studyInit();
quizInit();

$study_btn.addEventListener("click", (e) => {
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].classList.remove("active");
  }
  e.target.classList.add("active");
  if (e.target.innerText === "모두") {
    $study.innerHTML = "";
    studyInit();
  } else if (e.target.innerText === "도움링크") {
    $study.innerHTML = "";
    havingLink();
  } else if (e.target.innerText === "git") {
    $study.innerHTML = "";
    havingGit();
  } else if (e.target.innerText === "최신순") {
    $study.innerHTML = "";
    sortingData();
  }
}); //선택된 버튼에만 active 속성 추가

$quiz_btn.addEventListener("click", (e) => {
  for (let i = 0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].classList.remove("active");
  }
  e.target.classList.add("active");
  if (e.target.innerText === "모두") {
    $quiz.innerHTML = "";
    quizInit();
  } else if (e.target.innerText === "git") {
    $quiz.innerHTML = "";
    quizHavingGit();
  }
}); //선택된 버튼에만 active 속성 추가
