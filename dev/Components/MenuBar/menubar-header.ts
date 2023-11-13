import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../Buttons/icon-button';

@customElement('menubar-header')
export class MenuBarHeader extends LitElement {
  static override styles = css`
    :host {
      border: 2px dashed #f0ea3f;

      /* height: 200px; */
    }

    #iconContainer {
      display: flex;
      align-items: center;

      height: 100px;
      justify-content: space-around;
    }
    .iconItem {
      width: 25%;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }

    #inputContainer {
      border: 2px dashed #7df03f;
      height: 50px;
    }
  `;
  override render() {
    return html`
      <div id="iconContainer">
        <icon-button class="iconItem"></icon-button>
        <icon-button class="iconItem"></icon-button>
        <icon-button class="iconItem"></icon-button>
      </div>
      <div id="inputContainer">검색바</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-header': MenuBarHeader;
  }
}

/*
아이콘 표시 (뒤로가기, 앞으로가기, 홈으로 가기, 검색바)

*/
