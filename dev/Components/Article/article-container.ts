import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('article-container')
export class ArticleContainer extends LitElement {
  static override styles = css`
    :host {
      border: 1px solid red;
      width: 100%;
      height: 100%;
    }
  `;

  override render() {
    return html`<h1>아티클 메인</h1>`;
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
