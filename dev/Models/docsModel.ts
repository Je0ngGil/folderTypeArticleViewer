import { MenubarDirectory } from '../Components/MenuBar/menubar-directory';
import { MenubarArticle } from '../Components/MenuBar/menubar-article';

type DocsMetaDataJSON = {
  name: string;
  type: string;
  children?: DocsMetaDataJSON[];
};

class Docs {
  name: string;
  type: string;
  parent: Docs | null = null;

  constructor({ name, type }: { name: string; type: string }) {
    this.name = name;
    this.type = type;
  }
  registParent(parent: Docs) {
    this.parent = parent;
  }
}

export class Directory extends Docs {
  children!: (Directory | Article)[];
  DirDomElement!: MenubarDirectory;
  constructor({ name }: { name: string }) {
    super({ name, type: 'directory' });
    this.registDomElement();
  }
  registDomElement() {
    const menubarDirElement = new MenubarDirectory();
    menubarDirElement.name = this.name;
    this.DirDomElement = menubarDirElement;
  }
  registChildren(children: (Directory | Article)[]) {
    this.children = children;
    children.forEach((doc) => doc.registParent(this));
    this.appendChildDocDomElement();
  }
  appendChildDocDomElement() {
    const children = this.children.map((doc) => doc.getDocsDomElment());
    this.DirDomElement.append(...children);
  }
  getDocsDomElment() {
    return this.DirDomElement;
  }
}

export class Article extends Docs {
  articleDomElement!: MenubarArticle;
  constructor({ name }: { name: string }) {
    super({ name, type: 'article' });
    this.registDomElement();
  }
  registDomElement() {
    const menubarArticleElement = new MenubarArticle();
    menubarArticleElement.name = this.name;
    this.articleDomElement = menubarArticleElement;
  }
  getDocsDomElment() {
    return this.articleDomElement;
  }
}

export class DocsModel {
  rootDirectory!: Directory;
  constructor(docsMetaDataJSON: DocsMetaDataJSON) {
    this.rootDirectory = this.convertToDocsItem(docsMetaDataJSON) as Directory;
  }
  convertToDocsItem(docsMetaDataJSON: DocsMetaDataJSON) {
    if (docsMetaDataJSON.type === 'directory') {
      const dir = new Directory({ name: docsMetaDataJSON.name });
      const DocsChildren = docsMetaDataJSON.children!.map(this.convertToDocsItem.bind(this));
      dir.registChildren(DocsChildren);
      return dir;
    } else {
      const article = new Article({ name: docsMetaDataJSON.name });
      return article;
    }
  }
  getDocsDomElment() {
    return this.rootDirectory.getDocsDomElment();
  }
}
