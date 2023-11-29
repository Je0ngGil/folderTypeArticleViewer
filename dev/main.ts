// Dom Elements
const BodyElement = document.body;
const MenuBarMainElement = document.createElement('menubar-main');
const ArticleMainElement = document.createElement('article-main');

BodyElement.append(MenuBarMainElement, ArticleMainElement);

// const reponse = fetch(
//   'http://localhost:3000/public/CodingTest/Programmers/%EC%9A%94%EA%B2%A9_%EC%8B%9C%EC%8A%A4%ED%85%9C.md'
// );
// reponse.then(async (result) => {
//   const text = await result.text();
//   const divElement = document.createElement('div');
//   divElement.innerText = text;
//   bodyElement.appendChild(divElement);
// });
