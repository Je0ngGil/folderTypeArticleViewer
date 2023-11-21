import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menubar-content')
export class MenubarContent extends LitElement {
  static override styles = css`
    #content {
      border: 1px dashed black;
    }
  `;

  override render() {
    return html`<div id="content">나는 컨텐츠</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-content': MenubarContent;
  }
}
