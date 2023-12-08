declare const COTEXT_ENV = 'development';
// Dom Elements
const BodyElement = document.body;
const MenuBarContainerElement = document.createElement('menubar-container');
const ArticleContainerElement = document.createElement('article-container');

MenuBarContainerElement.addEventListener('requestContent', (e: any) => {
  let path = e.detail.path;
  //ArticleContainerElement path 전달
  path = path.replace(/\.[^/.]+$/, '');
  console.log(path);
  console.log(COTEXT_ENV);
  ArticleContainerElement.renderArticleByPath(path);
});

BodyElement.append(MenuBarContainerElement, ArticleContainerElement);
