// Dom Elements
const BodyElement = document.body;
const MenuBarContainerElement = document.createElement('menubar-container');
const ArticleContainerElement = document.createElement('article-container');

MenuBarContainerElement.addEventListener('requestContent', (e: any) => {
  let path = e.detail.path;
  ArticleContainerElement.renderArticleByPath(path);
});

BodyElement.append(MenuBarContainerElement, ArticleContainerElement);

console.log('내용이 바뀌나?');
