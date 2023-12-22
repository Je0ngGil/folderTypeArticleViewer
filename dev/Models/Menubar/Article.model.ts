import { Docs } from './Docs.model';
import { MenubarArticle } from '../../Components/MenuBar/menubar-article';

export class Article extends Docs {
  articleDomElement!: MenubarArticle;
  constructor({ name }: { name: string }) {
    super({ name, type: 'article' });
    this.registDomElement();
  }
  registDomElement() {
    const menubarArticleElement = new MenubarArticle();
    menubarArticleElement.name = this.name;
    menubarArticleElement.model = this;
    this.articleDomElement = menubarArticleElement;
  }
  getDocsDomElment() {
    return this.articleDomElement;
  }
  getCurrentPath() {
    let path = this.name;
    let curDir = this.parent;
    while (curDir) {
      path = curDir.name + '/' + path;
      curDir = curDir.parent;
    }
    return path;
  }
  select() {
    this.articleDomElement.isSelect = true;
  }
  unSelect() {
    this.articleDomElement.isSelect = false;
  }
}
