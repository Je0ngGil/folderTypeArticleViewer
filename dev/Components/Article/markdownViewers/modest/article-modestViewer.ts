import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { modestStyle } from './modestStyle';

@customElement('article-modestviewer')
export class ArticleModestViewer extends LitElement {
  static override styles = modestStyle;

  @property({ attribute: false }) HTMLText = '';
  @state() name = 'Modest';
  @query('div') markdownBody!: HTMLDivElement;

  protected override updated(): void {
    this.markdownBody.innerHTML = this.HTMLText;
  }

  override render() {
    return html`<div></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-modestviewer': ArticleModestViewer;
  }
}
