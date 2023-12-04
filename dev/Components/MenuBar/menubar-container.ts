import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '@lit/task';

import { DocsMetaDataTree } from '../../Models/docsDataTree';

import './menubar-header';
import './menubar-body';

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

  _getDataTask = new Task(this, {
    task: async () => {
      await new Promise((res) => setTimeout(res, 500)); // 임사 로딩
      const response = await fetch('/docs-metadata.json');
      const docsDataJson = await response.json();
      const docsMetaDataTree = new DocsMetaDataTree(docsDataJson);
      return docsMetaDataTree;
    },
    autoRun: true,
    args: () => [],
  });
  override render() {
    return html`
      ${this._getDataTask.render({
        initial: () => html`<loding-spinner />`,
        pending: () => html`<loding-spinner />`,
        complete: (docsMetaDataTree) => html`<menubar-body .docsMetaDataTree=${docsMetaDataTree}></menubar-body>`,
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
