import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

@customElement('article-viewerremocon')
export class ArticleViewerRemocon extends LitElement {
  static override styles = css`
    .container {
      position: fixed;
      top: 20px;
      right: 20px;

      font-size: var(--small-font-size);
    }
    #toggle {
      padding: 10px;
      font-size: var(--small-font-size);

      border-radius: 10px;
      border: 1px solid var(--first-color);
    }
    #toggle:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }
    #toggle.active {
      color: var(--fifth-color);
      background-color: var(--third-color);
    }
    #frame {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    #viewerList {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      position: relative;
      flex-direction: column;
      transition: all 0.3s ease;
    }

    .item {
      margin: 2px;
      border: 1px solid var(--first-color);
      border-radius: 5px;

      text-align: center;

      cursor: pointer;
    }
    .item:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
    }
  `;
  @query('#toggle') toggle!: HTMLButtonElement;
  @query('#viewerList') viewerList!: HTMLDivElement;

  @property({ attribute: false }) viewerNameList: string[] = [];
  @state() viewerListHeight: number = 0;

  protected override firstUpdated(): void {
    const items = this.viewerNameList.map((name) => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerText = name;
      return item;
    });
    this.viewerList.append(...items);
  }
  protected override updated(): void {
    this.viewerListHeight = this.viewerList.getBoundingClientRect().height;
    this.viewerList.style.top = `-${this.viewerListHeight + 2}px`;
  }
  open() {
    this.toggle.classList.toggle('active');
    this.toggle.classList.contains('active')
      ? (this.viewerList.style.top = '0px')
      : (this.viewerList.style.top = `-${this.viewerListHeight + 2}px`);
  }

  override render() {
    return html`
      <div class="container">
        <button id="toggle" @click=${this.open}>Doc Thema</button>

        <div id="frame">
          <div id="viewerList"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-viewerremocon': ArticleViewerRemocon;
  }
}
