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
  children!: Docs[];

  constructor({ name }: { name: string }) {
    super({ name, type: 'directory' });
  }
  registChildren(children: Docs[]) {
    this.children = children;
    children.forEach((doc) => doc.registParent(this));
  }
}

export class Article extends Docs {
  constructor({ name }: { name: string }) {
    super({ name, type: 'directory' });
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
}
