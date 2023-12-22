import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './article-body';

@customElement('article-container')
export class ArticleContainer extends LitElement {
  static override styles = css`
    :host {
      position: absolute;
      left: 0;
      margin: 20px;
    }
  `;
  @state() pathOfArticle: string = 'README.md';

  renderArticleByPath(path: string) {
    this.pathOfArticle = path;
  }

  override render() {
    return html`<article-body pathOfArticle=${this.pathOfArticle}></article-body>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-container': ArticleContainer;
  }
}

/*
container에서 MD을 body로 내보낸다
body는 선택된 테마의 Fomatter에게 마크다운을 HTML로 변환을 요청한다
응답을 받은 body는 HTML을 화면에 렌더링한다
 */
