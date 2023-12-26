import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '@lit/task';

declare const GITHUB_URL: string;
declare const GAT1: string;
declare const GAT2: string;
declare const GAT3: string;

@customElement('article-githubviewer')
export class ArticleGitHubViewer extends LitElement {
  @property({ attribute: false }) markdownText = '';

  _requestTransformToHTML = new Task(this, {
    task: async ([markdownText]) => {
      const response = await fetch(GITHUB_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GAT1.concat(GAT2).concat(GAT3)}`,
        },
        body: JSON.stringify({ text: markdownText }),
      });
      return await response.text();
    },
    args: () => [this.markdownText],
    autoRun: true,
  });

  override render() {
    return html`<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown-light.css"
        integrity="sha512-twSIkcOWTg8pO2szOkSwXeumnI79JQ0zVRavBB5cdJvhVFhReF9fBlyFM380P6vKIQ4mlD80EPtuZdSPpqYDgQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
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
      })} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-githubviewer': ArticleGitHubViewer;
  }
}
