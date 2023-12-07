import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Task } from '@lit/task';

@customElement('article-container')
export class ArticleContainer extends LitElement {
  static override styles = css`
    :host {
      width: 100%;
      height: 100%;
    }
  `;
  @state() pathOfArticle: string = 'docs/test.md';

  renderArticleByPath(path: string) {
    this.pathOfArticle = path;
  }

  _requestArticle = new Task(this, {
    task: async ([pathOfArticle]) => {
      await new Promise((res) => setTimeout(res, 1000)); // 임시 로딩
      const response = await fetch(pathOfArticle);
      const result = await response.text();
      const a = document.createElement('div');
      a.innerHTML = result;
      return a;
    },
    autoRun: true,
    args: () => [this.pathOfArticle],
  });

  override render() {
    return html` ${this._requestArticle.render({
      initial: () => html`<loding-spinner />`,
      pending: () => html`<loding-spinner />`,
      complete: (result) => html`<div>${result}</div>`,
      error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
    })}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-container': ArticleContainer;
  }
}

/*
역할.
컨텐츠 경로를 받아 body에 뿌리기
컨텐츠의 종류는 markdown, text, html 일수도 있음 (미정)
  menubar에서 컨텐츠 경로를 디스패치 -> main에서 캐치 -> article container로 전달하기

*/
