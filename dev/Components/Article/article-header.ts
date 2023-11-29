import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('article-header')
export class ArticleHeader extends LitElement {
  static override styles = css`
    :host {
      border: 1px solid red;
    }
  `;

  override render() {
    return html`<ion-icon name="folder-outline"></ion-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-header': ArticleHeader;
  }
}
