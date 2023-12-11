import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Task } from '@lit/task';

import { Formmater } from '../../util/formatter';

@customElement('article-container')
export class ArticleContainer extends LitElement {
  static override styles = css`
    :host {
      width: 100%;
      height: 100%;
    }
  `;
  @state() pathOfArticle: string = 'docs/Blog/Blog소개.md';

  renderArticleByPath(path: string) {
    this.pathOfArticle = path;
  }

  _requestArticle = new Task(this, {
    task: async ([pathOfArticle]) => {
      await new Promise((res) => setTimeout(res, 1000)); // 임시 로딩
      const response = await fetch(pathOfArticle);
      const result = await response.text();
      const a = document.createElement('div');
      a.insertAdjacentHTML('afterbegin', Formmater.MarkdownToHtmlFormatter(result));

      return a;
    },
    autoRun: true,
    args: () => [this.pathOfArticle],
  });

  override render() {
    return html` ${this._requestArticle.render({
      initial: () => html`<loding-spinner />`,
      pending: () => html`<loding-spinner />`,
      complete: (result) => html`${result}`,
      error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
    })}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-container': ArticleContainer;
  }
}
