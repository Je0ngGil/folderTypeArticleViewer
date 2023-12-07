import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('article-body')
export class ArticleBody extends LitElement {
  static override styles = css``;

  override render() {
    return html`<ion-icon name="folder-outline"></ion-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-body': ArticleBody;
  }
}
