import { Docs } from './Docs.model';
import { Article } from './Article.model';
import { MenubarDirectory } from '../../Components/MenuBar/menubar-directory';

export class Directory extends Docs {
  children!: (Directory | Article)[];
  DirChildren: Directory[] = [];
  ArticleChildren: Article[] = [];
  DirDomElement!: MenubarDirectory;
  constructor({ name }: { name: string }) {
    super({ name, type: 'directory' });
    this.registDomElement();
  }
  registDomElement() {
    const menubarDirElement = new MenubarDirectory();
    menubarDirElement.name = this.name;
    menubarDirElement.model = this;
    this.DirDomElement = menubarDirElement;
  }
  registChildren(children: (Directory | Article)[]) {
    for (let doc of children) {
      if (doc.type === 'directory') {
        this.DirChildren.push(doc as Directory);
      } else {
        this.ArticleChildren.push(doc as Article);
      }
    }

    this.DirChildren.forEach((dir) => dir.registParent(this));
    this.ArticleChildren.forEach((article) => article.registParent(this));

    this.appendChildDocDomElement();
  }
  appendChildDocDomElement() {
    const dirElementChildren = this.DirChildren.map((dir) => dir.getDocsDomElment());
    const articleElementChildren = this.ArticleChildren.map((article) => article.getDocsDomElment());
    this.DirDomElement.append(...dirElementChildren, ...articleElementChildren);
  }
  getDocsDomElment() {
    return this.DirDomElement;
  }
  unSelectAllArticles() {
    this.ArticleChildren.forEach((articleModel) => articleModel.unSelect());
    this.DirChildren.forEach((dirModel) => dirModel.unSelectAllArticles());
  }
}
