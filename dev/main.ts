// Dom Elements
const BodyElement = document.body;
const MenuBarContainerElement = document.createElement('menubar-container');
const ArticleContainerElement = document.createElement('article-container');

MenuBarContainerElement.addEventListener('my-event', (e) => {
  console.log('ee');
  console.log(e);
});

BodyElement.append(MenuBarContainerElement, ArticleContainerElement);
