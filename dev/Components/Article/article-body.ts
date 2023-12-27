import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '@lit/task';

import { ViewModel } from '../../Models/Article/view.model';
import './article-viewerRemocon';

@customElement('article-body')
export class ArticleBody extends LitElement {
  static override styles = css``;

  @property() pathOfArticle = '';

  _requestArticle = new Task(this, {
    task: async ([pathOfArticle]) => {
      const response = await fetch(pathOfArticle);
      return await response.text();
    },
    autoRun: true,
    args: () => [this.pathOfArticle],
  });

  override render() {
    return html`${this._requestArticle.render({
        initial: () => html`<loding-spinner />`,
        pending: () => html`<loding-spinner />`,
        complete: (result) => html`${ViewModel.renderMarkdownToHTML(result)}`,
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })} <article-viewerremocon .viewerNameList=${ViewModel.getViewerNameList()}> </article-viewerremocon> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-body': ArticleBody;
  }
}

/*
문서 path를 전달받고
path에 해당하는 markdown을 요청, 응답받는다
응답
*/
