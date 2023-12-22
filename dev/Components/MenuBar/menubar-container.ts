import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Task } from '@lit/task';

import './menubar-header';
import './menubar-body';

import { MenubarArticle } from './menubar-article';
import { MenubarDirectory } from './menubar-directory';
import { DocsModelController } from '../../Controllers/docsModel.controller';
import { Article } from '../../Models/Menubar/Article.model';

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

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `;

  @state()
  docsModelController!: DocsModelController;

  _getDataModel = new Task(this, {
    task: async () => {
      // await new Promise((res) => setTimeout(res, 1000)); // 임사 로딩
      const response = await fetch('docs-metadata.json');
      const docsMetaDataJSON = await response.json();
      this.docsModelController = new DocsModelController(docsMetaDataJSON);
      this.InitDocsModel();

      return this.docsModelController.getRootDirElment();
    },
    autoRun: true,
    args: () => [],
  });

  InitDocsModel() {
    // Article 클릭 시 Article 컴포넌트로 경로를 전달하는 리스너 설정
    this.docsModelController.addEventListenerToRootDirectory('click', (e) => {
      const model = (e.target as MenubarDirectory | MenubarArticle).model;
      if (model.type === 'article') {
        const path = (model as Article).getCurrentPath();
        const event = new CustomEvent('requestContent', { detail: { path } });
        this.dispatchEvent(event);

        this.docsModelController.unSelectAllArticles();
        (model as Article).select();
      }
    });
  }

  override render() {
    return html`
      ${this._getDataModel.render({
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
