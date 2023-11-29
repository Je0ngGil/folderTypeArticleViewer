import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../Buttons/button-folder';
import '../Buttons/button-content';
import './menubar-folder';
import './menubar-content';

@customElement('menubar-body')
class MenuBarBody extends LitElement {
  static override styles = css`
    :host {
      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #folderContainer {
      display: flex;
      flex-direction: column;
    }
  `;

  override render() {
    return html`
      <div id="folderContainer">
        <menubar-folder>
          <menubar-folder><menubar-folder></menubar-folder><menubar-content></menubar-content> </menubar-folder>
          <menubar-folder><menubar-content></menubar-content></menubar-folder>
          <menubar-folder></menubar-folder>
        </menubar-folder>
        <menubar-folder>
          <menubar-content></menubar-content>
        </menubar-folder>
      </div>
    `;
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
