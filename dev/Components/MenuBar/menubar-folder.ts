import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ref, Ref, createRef } from 'lit/directives/ref.js';

const FOLDERICON = {
  OPENED: 'folder-open-outline',
  CLOSED: 'folder-outline',
};

@customElement('menubar-folder')
export class MenubarFolder extends LitElement {
  static override styles = css`
    #title {
      border: 1px dashed black;

      display: grid;
      grid-template-columns: min-content max-content;
      column-gap: 0.7rem;

      font-size: var(--normal-font-size);
    }
    #title.active {
      color: var(--fifth-color);
      background-color: var(--third-color);
    }
    #title:hover {
      color: var(--fifth-color);
      background-color: var(--third-color);
      cursor: pointer;
    }

    #innerFolder {
      visibility: hidden;

      opacity: 0;

      max-height: 0;
      transition: max-height 0.2s ease;
    }
    #innerFolder.active {
      visibility: visible;
      opacity: 1;

      max-height: 1000px;
      transition: max-height 1.2s ease, opacity 0.5s ease;

      margin-left: 5%;
      padding-left: 3%;
      border-left: 2px solid var(--third-color);
    }
  `;

  titleRef: Ref<HTMLDivElement> = createRef();
  innerFolerRef: Ref<HTMLDivElement> = createRef();

  @property() folderName: string = '폴더';
  @state() isOpend: boolean = false;

  activeFolder() {
    this.isOpend = !this.isOpend;
    this.titleRef.value?.classList.toggle('active');
    this.innerFolerRef.value?.classList.toggle('active');
  }

  override render() {
    return html`
      <div id="title" @click=${this.activeFolder} ${ref(this.titleRef)}>
        <ion-icon name=${this.isOpend ? FOLDERICON.OPENED : FOLDERICON.CLOSED}></ion-icon>
        <div>${this.folderName}</div>
      </div>
      <div id="innerFolder" ${ref(this.innerFolerRef)}>
        <slot>...</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-folder': MenubarFolder;
  }
}

/*
설정해야할 프로퍼티
아이콘, 폴더 이름
 */
