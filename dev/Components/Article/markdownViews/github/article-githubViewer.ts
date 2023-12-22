import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '@lit/task';

import { gitHubCSS } from './githubViewerStyle';

declare const GITHUB_ACCESS_TOKEN: string;
declare const GITHUB_URL: string;

@customElement('article-githubviewer')
export class ArticleGitHubViewer extends LitElement {
  static override styles = gitHubCSS;

  @property({ attribute: false }) markdownText = '';

  _requestTransformToHTML = new Task(this, {
    task: async ([markdownText]) => {
      const response = await fetch(GITHUB_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ text: markdownText }),
      });
      return await response.text();
    },
    args: () => [this.markdownText],
  });

  override render() {
    return html`
      ${this._requestTransformToHTML.render({
        initial: () => html`<loding-spinner />`,
        pending: () => html`<loding-spinner />`,
        complete: (result) => {
          const MarkdownBody = document.createElement('div');
          MarkdownBody.classList.add('markdown-body');
          MarkdownBody.insertAdjacentHTML('afterbegin', result);
          return html`${MarkdownBody}`;
        },
        error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
      })}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-githubviewer': ArticleGitHubViewer;
  }
}
