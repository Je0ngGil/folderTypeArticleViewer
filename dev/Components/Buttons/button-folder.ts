import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('button-folder')
export class ButtonFolder extends LitElement {
  static override styles = css`
    :host {
      border: 1px solid red;
    }
  `;

  override render() {
    return html`나는 폴더`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-folder': ButtonFolder;
  }
}
