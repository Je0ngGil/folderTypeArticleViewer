import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-button')
export class IconButton extends LitElement {
  static override styles = css`
    :host {
      border: 2px dashed #603ff0;
      background-color: #3ff054;
      position: relative;
    }
    div {
      position: absolute;
    }
  `;
  override render() {
    return html`<div>컨텐츠</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-button': IconButton;
  }
}

/*


*/
