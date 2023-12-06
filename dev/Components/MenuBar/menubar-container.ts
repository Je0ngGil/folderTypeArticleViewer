import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Task } from '@lit/task';

import './menubar-header';
import './menubar-body';

import { DocsModel } from '../../Models/docsModel';

@customElement('menubar-container')
class MenuBarContainer extends LitElement {
  static override styles = css`
    :host {
      position: fixed;
      left: 0;
      height: 100vh;
      bottom: 0;
      width: var(--sidebar-width);

      display: flex;
      flex-direction: column;

      border: 1px solid black;
    }
  `;

  @state()
  docsModel!: DocsModel;

  _getDataTask = new Task(this, {
    task: async () => {
      await new Promise((res) => setTimeout(res, 500)); // 임사 로딩
      const response = await fetch('/docs-metadata.json');
      const docsMetaDataJSON = await response.json();
      this.docsModel = new DocsModel(docsMetaDataJSON);

      return this.docsModel.getDocsDomElment();
    },
    autoRun: true,
    args: () => [],
  });

  override render() {
    setTimeout(() => {}, 3000);
    return html`
      ${this._getDataTask.render({
        initial: () => html`<loding-spinner />`,
        pending: () => html`<loding-spinner />`,
        complete: (docsDomElement) => html`<menubar-body .docsDomElement=${docsDomElement}></menubar-body>`,
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menubar-container': MenuBarContainer;
  }
}
