import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../Buttons/button-icon';
import '../Inputs/input-search';

@customElement('menubar-header')
export class MenuBarHeader extends LitElement {
  static override styles = css`
    :host {
      border: 2px dashed #f0ea3f;
    }

    #iconContainer {
      display: flex;
      align-items: center;

      height: 100px;
      justify-content: space-around;
    }
    .iconItem {
      width: 20%;
      aspect-ratio: 1;
    }

    #inputContainer {
      height: 70px;
    }
  `;

  test(e: Event) {
    if (e.currentTarget === e.target) return;
    console.log((e.target as Element).getAttribute('key'));
  }
  override render() {
    return html`
      <div id="iconContainer" @click=${this.test}>
        <Button-Icon class="iconItem" icon="caret-back-outline" key="backward"></Button-Icon>
        <Button-Icon class="iconItem" icon="home-outline" key="home"></Button-Icon>
        <Button-Icon class="iconItem" icon="caret-forward-outline" key="forward"></Button-Icon>
      </div>
      <div id="inputContainer">
        <Input-Search></Input-Search>
      </div>
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
