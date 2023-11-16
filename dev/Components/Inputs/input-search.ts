import { LitElement, html, css } from 'lit';
import { ref, Ref, createRef } from 'lit/directives/ref.js';
import { customElement } from 'lit/decorators.js';

@customElement('input-search')
export class InputSearch extends LitElement {
  static override styles = css`
    :host {
      display: flex;

      justify-content: space-between;
      align-items: center;

      height: 100%;
    }
    #searchInput {
      height: 80%;
      width: 10%;
      flex: 8 1;
      font-size: 1rem;
    }
    #searchButton {
      flex: 2 0;
      aspect-ratio: 1;
      font-size: 2vw;
    }
  `;
  constructor() {
    super();
  }
  inputRef: Ref<HTMLInputElement> = createRef();

  activeEnter(e: KeyboardEvent) {
    if (e.key !== 'Enter') return;
    this.search();
  }
  activeButton() {
    this.search();
  }
  search() {
    const inputElement = this.inputRef.value!;
    const searchTerm = inputElement.value;
    inputElement.value = '';

    console.log(searchTerm);
  }

  override render() {
    return html`
      <input type="text" id="searchInput" placeholder="검색" @keyup=${this.activeEnter} ${ref(this.inputRef)} />
      <button-icon id="searchButton" @click=${this.activeButton}></button-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'input-search': InputSearch;
  }
}
