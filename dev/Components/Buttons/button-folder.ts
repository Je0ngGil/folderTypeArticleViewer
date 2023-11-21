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
    return html`<ion-icon name="folder-outline"></ion-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-folder': ButtonFolder;
  }
}
