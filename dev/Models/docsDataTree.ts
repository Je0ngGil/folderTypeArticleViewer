type Item = 'directory' | 'article';

type DocsMetadata = {
  name: string;
  type: Item;
  children?: DocsMetadata[];
};

const test: DocsMetadata = {
  name: 'docs',
  type: 'directory',
  children: [
    {
      name: 'test.md',
      type: 'article',
    },
    {
      name: 'test2.md',
      type: 'article',
    },
    {
      name: '테스트폴더',
      type: 'directory',
      children: [
        {
          name: '테스트.md',
          type: 'article',
        },
      ],
    },
    {
      name: '테스트폴더2',
      type: 'directory',
      children: [
        {
          name: '테스트2.md',
          type: 'article',
        },
      ],
    },
    {
      name: '테스트폴더3',
      type: 'directory',
      children: [
        {
          name: '테스트3.md',
          type: 'article',
        },
      ],
    },
  ],
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
