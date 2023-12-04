import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menubar-article')
export class MenubarArticle extends LitElement {
  static override styles = css`
    #article {
      display: grid;
      grid-template-columns: min-content max-content;
      column-gap: 0.7rem;
    }
    #article:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
  `;

  override render() {
    return html`<div id="article">
      <ion-icon name="document-outline"></ion-icon>
      <div>컨텐츠 이름</div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-article': MenubarArticle;
  }
}

/*
설정해야할 프로퍼티
아이콘, 컨텐츠 이름, 컨텐츠 링크(클릭 시 이벤트로 전달)
*/
