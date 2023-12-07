import { Docs } from './Docs.model';
import { Article } from './Article.model';
import { MenubarDirectory } from '../Components/MenuBar/menubar-directory';

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
    menubarDirElement.model = this;
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
