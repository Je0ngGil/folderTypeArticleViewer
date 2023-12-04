import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DocsMetaDataTree } from '../../Models/docsDataTree';

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

  @property({ attribute: false })
  docsMetaDataTree?: DocsMetaDataTree;

  override render() {
    console.log(this.docsMetaDataTree);
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
