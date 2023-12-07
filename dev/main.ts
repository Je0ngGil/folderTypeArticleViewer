// Dom Elements
const BodyElement = document.body;
const MenuBarContainerElement = document.createElement('menubar-container');
const ArticleContainerElement = document.createElement('article-container');

MenuBarContainerElement.addEventListener('requestContent', (e: any) => {
  const path = e.detail.path;
  //ArticleContainerElement path 전달
  ArticleContainerElement.renderArticleByPath(path);
});

BodyElement.append(MenuBarContainerElement, ArticleContainerElement);
