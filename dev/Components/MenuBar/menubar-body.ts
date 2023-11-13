import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menubar-body')
class MenuBarBody extends LitElement {
  static override styles = css`
    :host {
      border: 2px dashed #f0863f;

      height: 100%;
    }
  `;
  override render() {
    return html`<div>바디</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-body': MenuBarBody;
  }
}

/*
폴더, 컨텐츠 표현
*/
