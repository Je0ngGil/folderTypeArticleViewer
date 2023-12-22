import { LitElement, html, css, PropertyValueMap, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Article } from '../../Models/Menubar/Article.model';

@customElement('menubar-article')
export class MenubarArticle extends LitElement {
  static override styles = css`
    #article {
      display: grid;
      grid-template-columns: min-content max-content max-content;
      column-gap: 0.7rem;
    }
    #article:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
    #article.selected {
      color: var(--fifth-color);
      background-color: var(--first-color);
      &::after {
        content: '✔';
      }
    }
  `;

  @property() name?: string;
  @property({ attribute: false }) model!: Article;
  @property({ attribute: false }) isSelect = false;

  constructor() {
    super();
  }

  override render() {
    return html`<div id="article" class=${this.isSelect ? 'selected' : ''}>
      <ion-icon name="document-outline"></ion-icon>
      <div>${this.name}</div>
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
