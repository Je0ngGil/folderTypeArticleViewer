import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import { MenubarDirectory } from './menubar-directory';
import { MenubarArticle } from './menubar-article';

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
  docsDomElement!: MenubarDirectory | MenubarArticle;

  @query('#directoryContainer')
  directoryContainer!: HTMLDivElement;

  override render() {
    return html` <div id="directoryContainer">${this.docsDomElement}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-body': MenuBarBody;
  }
}
