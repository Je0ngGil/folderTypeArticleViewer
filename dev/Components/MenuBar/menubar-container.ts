import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './menubar-header';
import './menubar-body';

@customElement('menubar-container')
class MenuBarContainer extends LitElement {
  @property() button = 'BTN';

  static override styles = css`
    :host {
      position: fixed;
      left: 0;
      height: 100vh;
      bottom: 0;
      width: var(--sidebar-width);

      display: flex;
      flex-direction: column;

      border: 1px solid black;
    }
  `;
  override render() {
    return html`
      <menubar-header></menubar-header>
      <menubar-body></menubar-body>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-container': MenuBarContainer;
  }
}