import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('article-header')
export class ArticleHeader extends LitElement {
  static override styles = css``;

  override render() {
    return html`<ion-icon name="folder-outline"></ion-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-header': ArticleHeader;
  }
}
