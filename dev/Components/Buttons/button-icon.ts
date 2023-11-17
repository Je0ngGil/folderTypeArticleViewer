import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-icon')
export class ButtonIcon extends LitElement {
  static override styles = css`
    :host {
      position: relative;
      font-size: var(--big-font-size);

      color: var(--fifth-color);
      background-color: var(--first-color);
      border: 1px solid var(--first-color);

      border-radius: 25%;

      transition: 0.1s;
    }
    :host(:hover) {
      background-color: var(--third-color);
      color: var(--first-color);
      border: 1px solid var(--first-color);

      transform: scale(1.1);
      cursor: pointer;
    }
    :host(:active) {
      transform: scale(0.98);
      cursor: pointer;
    }

    ion-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;

  @property() icon: string = 'help-outline';
  @property() key: string = '';

  override render() {
    return html` <ion-icon name="${this.icon}"></ion-icon> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-icon': ButtonIcon;
  }
}
