import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Directory, Article } from '../../Models/docsDataTree';

import './menubar-directory';
import './menubar-article';

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
  docsMetaDataJSON!: Directory | Article;

  @query('#directoryContainer')
  directoryContainer!: HTMLDivElement;

  // convertDocsMetaDataJSONToDOM(docsMetaDataJSON: Directory | Article, parent: HTMLElement) {
  //   if (docsMetaDataJSON.type === 'directory') {
  //     const dirElement = this.createDirectoryElement(docsMetaDataJSON.name);
  //     parent.append(dirElement);
  //     if (docsMetaDataJSON.children) {
  //       dirElement.addToInnerDirectory(
  //         docsMetaDataJSON.children.map((data) => this.convertDocsMetaDataJSONToDOM(data, dirElement))
  //       );
  //     }
  //     return dirElement;
  //   } else if (docsMetaDataJSON.type === 'article') {
  //     return this.createArticleElement(docsMetaDataJSON.name);
  //   } else {
  //     throw Error();
  //   }
  // }
  convertDocsMetaDataJSONToDOM(docsMetaDataJSON: Directory | Article) {
    if (docsMetaDataJSON.type === 'directory') {
      const dirElement = this.createDirectoryElement(docsMetaDataJSON.name);
      dirElement.innerDirElements = docsMetaDataJSON.children.map(this.convertDocsMetaDataJSONToDOM.bind(this));
      return dirElement;
    } else {
      const articleElement = this.createArticleElement(docsMetaDataJSON.name);
      return articleElement;
    }
  }
  createDirectoryElement(dirName: string) {
    const menuBarDirectoryElement = document.createElement('menubar-directory');
    menuBarDirectoryElement.setAttribute('name', dirName);
    return menuBarDirectoryElement;
  }
  createArticleElement(articleName: string) {
    const menuBarArticleElement = document.createElement('menubar-article');
    menuBarArticleElement.setAttribute('name', articleName);
    return menuBarArticleElement;
  }
  override render() {
    return html` <div id="directoryContainer">${this.convertDocsMetaDataJSONToDOM(this.docsMetaDataJSON)}</div> `;
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
