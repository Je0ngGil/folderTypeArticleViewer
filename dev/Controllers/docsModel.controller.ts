import { Directory } from '../Models/Menubar/Directory.model';
import { Article } from '../Models/Menubar/Article.model';

type DocsMetaDataJSON = {
  name: string;
  type: string;
  children?: DocsMetaDataJSON[];
};

export class DocsModelController {
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
  getRootDirElment() {
    return this.rootDirectory.getDocsDomElment();
  }
  addEventListenerToRootDirectory(type: string, evnetListener: (e: Event) => void) {
    const rootDirElement = this.getRootDirElment();
    rootDirElement.addEventListener(type, evnetListener);
  }
}
