import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

export class Formmater {
  static MarkdownToHtmlFormatter(markdownText: string) {
    const html_text = unified().use(markdown).use(remark2rehype).use(html).processSync(markdownText);
    return html_text.toString();
  }
}
