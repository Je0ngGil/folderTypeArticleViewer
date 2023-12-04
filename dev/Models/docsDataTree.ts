type Item = 'directory' | 'article';

export type Directory = {
  name: string;
  type: 'directory';
  children: (Directory | Article)[];
};
export type Article = {
  name: string;
  type: 'article';
};
