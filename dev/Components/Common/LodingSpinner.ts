import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('loding-spinner')
export class LodingSpinner extends LitElement {
  static override styles = css`
    :host {
      position: absolute;
      left: 50%;
      top: 50%;
    }
    .spinner-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .spinner {
      border: 8px solid rgba(0, 0, 0, 0.1);
      border-top: 8px solid var(--third-color);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  override render() {
    return html` <div class="spinner-container">
      <div class="spinner"></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'loding-spinner': LodingSpinner;
  }
}
