export class Docs {
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
