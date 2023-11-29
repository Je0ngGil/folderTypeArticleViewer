// Dom Elements
const BodyElement = document.body;
const MenuBarContainerElement = document.createElement('menubar-container');
const ArticleContainerElement = document.createElement('article-container');

BodyElement.append(MenuBarContainerElement, ArticleContainerElement);

// const reponse = fetch(
//   'http://localhost:3000/public/CodingTest/Programmers/%EC%9A%94%EA%B2%A9_%EC%8B%9C%EC%8A%A4%ED%85%9C.md'
// );
// reponse.then(async (result) => {
//   const text = await result.text();
//   const divElement = document.createElement('div');
//   divElement.innerText = text;
//   bodyElement.appendChild(divElement);
// });
