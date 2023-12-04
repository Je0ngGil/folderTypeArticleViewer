import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DocsMetaDataTree } from '../../Models/docsDataTree';

import './menubar-directory';
import './menubar-article';

@customElement('menubar-body')
class MenuBarBody extends LitElement {
  static override styles = css`
    :host {
      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #directoryContainer {
      display: flex;
      flex-direction: column;
    }
  `;

  @property({ attribute: false })
  docsMetaDataTree?: DocsMetaDataTree;

  override render() {
    console.log(this.docsMetaDataTree);
    return html` <div id="directoryContainer"></div> `;
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
