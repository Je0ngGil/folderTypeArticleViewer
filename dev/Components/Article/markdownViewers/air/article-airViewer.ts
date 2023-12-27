import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { airStyle } from './airStyle';

@customElement('article-airviewer')
export class ArticleAirViewer extends LitElement {
  static override styles = airStyle;

  @property({ attribute: false }) HTMLText = '';
  @state() name = 'Air';
  @query('div') markdownBody!: HTMLDivElement;

  protected override updated(): void {
    this.markdownBody.innerHTML = this.HTMLText;
  }

  override render() {
    return html`<div class="markdown-body"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-airviewer': ArticleAirViewer;
  }
}
