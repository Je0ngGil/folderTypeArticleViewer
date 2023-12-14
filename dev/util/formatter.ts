import markdownit from 'markdown-it';
import hljs from 'highlight.js';

export class Formmater {
  static MarkdownToHtmlFormatter(markdownText: string) {
    const md = markdownit({
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre><code class="hljs">' +
              hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
              '</code></pre>'
            );
          } catch (__) {}
        }

        return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
      },
    }) as any;

    const result = md.render(markdownText);
    return result;
  }
}
