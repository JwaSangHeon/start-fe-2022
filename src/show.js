import { loading } from "./loading.js";

const $study = document.querySelector("#study");
const $quiz = document.querySelector("#quiz");

export const showStudy = (jsonPath, loadingName, mode) => {
  loadingName.classList.remove("hidden"); //처음에 로딩 화면 표시
  $study.innerHTML = "";
  // loading(loadingName);
  fetch(jsonPath).then((res) => {
    loading(loadingName, () => {
      res.json().then((datas) => {
        if (mode === "sort") {
          datas.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        datas.map((data, index) => {
          let docUrlHtml = data.docUrl
            ? `<a href=${data.docUrl} class="badge bg-secondary">문서</a>`
            : "";

          let linkHtml = "";
          data.links.forEach((link, index) => {
            linkHtml += `<a href=${link} class="badge bg-secondary link">${
              index + 1
            }</a>`;
          });

          let gitUrlHtml = data.gitUrl ? `<a href=${data.gitUrl}>git</a>` : "";
          if (mode === "all") {
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
          } else if (mode === "link" && data.links.length >= 1) {
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
          } else if (mode === "git" && gitUrlHtml) {
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
          } else if (mode === "sort") {
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
          }
        });
      });
    });
  }); //fetch가 끝나면 1초뒤에 로딩 hidden 된다.
};

export const showQuiz = (jsonPath, loadingName, mode) => {
  loadingName.classList.remove("hidden"); //처음에 로딩 화면 표시
  $quiz.innerHTML = "";
  fetch(jsonPath).then((res) =>
    loading(loadingName, () => {
      res.json().then((datas) =>
        datas.map((data) => {
          let gitUrlHtml = data.gitUrl ? `<a href=${data.gitUrl}>git</a>` : "";
          if (mode === "all") {
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
          } else if (mode === "git" && gitUrlHtml) {
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
      );
    })
  );
}; //모두: class.json 모든 속성 표시
