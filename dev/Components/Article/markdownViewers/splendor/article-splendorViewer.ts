import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { splendorStyle } from './splendorStyle';

@customElement('article-splendorviewer')
export class ArticleSplendorViewer extends LitElement {
  static override styles = splendorStyle;

  @property({ attribute: false }) HTMLText = '';
  @state() name = 'Splendor';
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
    'article-splendorviewer': ArticleSplendorViewer;
  }
}
