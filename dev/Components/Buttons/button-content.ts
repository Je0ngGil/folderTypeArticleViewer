import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('button-content')
export class ButtonContent extends LitElement {
  static override styles = css`
    :host {
      border: 1px solid blue;
    }
  `;
  constructor() {
    super();
  }

  override render() {
    return html`나는 컨텐츠`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-folder': ButtonContent;
  }
}
