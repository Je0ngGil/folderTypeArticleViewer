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
