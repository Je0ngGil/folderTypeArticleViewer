type Item = 'directory' | 'article';

type DocsMetadata = {
  name: string;
  type: Item;
  children?: DocsMetadata[];
};

export class DocsMetaDataTree {
  name: string;
  type: Item;
  children?: DocsMetaDataTree[];
  constructor({ name, type, children }: DocsMetadata) {
    this.name = name;
    this.type = type;
    if (children) {
      this.children = [];
      children.forEach(this.registChild.bind(this));
    }
  }
  registChild(child: DocsMetadata) {
    if (this.children) this.children.push(new DocsMetaDataTree(child));
  }
}
