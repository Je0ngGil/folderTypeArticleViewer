import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { basicStyle } from './basicStyle';

@customElement('article-basicviewer')
export class ArticleBasicViewer extends LitElement {
  static override styles = basicStyle;

  @property({ attribute: false }) HTMLText = '';
  @state() name = 'Basic';
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
    'article-basicviewer': ArticleBasicViewer;
  }
}
