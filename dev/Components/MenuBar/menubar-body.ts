import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../Buttons/button-folder';
import '../Buttons/button-content';

@customElement('menubar-body')
class MenuBarBody extends LitElement {
  static override styles = css`
    :host {
      border: 2px dashed #f0863f;

      height: 100%;

      display: flex;
      flex-direction: column;
    }
    #folderContainer {
      display: flex;
      flex-direction: column;
    }
    #contentContainer {
      display: flex;
      flex-direction: column;
    }
  `;
  constructor() {
    super();
  }

  override render() {
    return html`
      <div id="title">현재 페이지</div>
      <div id="folderContainer">
        <button-folder></button-folder>
        <button-folder></button-folder>
        <button-folder></button-folder>
      </div>
      <div id="contentContainer">
        <button-content></button-content>
        <button-content></button-content>
        <button-content></button-content>
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
