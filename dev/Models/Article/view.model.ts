import MarkdownIt from 'markdown-it';

import {
  ArticleBasicViewer,
  ArticleSplendorViewer,
  ArticleModestViewer,
  ArticleAirViewer,
} from '../../Components/Article/markdownViewers';

export class ViewModel {
  static currentViewer: any;
  static ViewerList = [
    new ArticleBasicViewer(),
    new ArticleSplendorViewer(),
    new ArticleModestViewer(),
    new ArticleAirViewer(),
  ];
  static markdownIt = MarkdownIt({ html: true, linkify: true, typographer: true });

  static getViewerNameList() {
    return ViewModel.ViewerList.map((view) => view.name);
  }
  static getCurrentViewer() {
    if (ViewModel.currentViewer === undefined) {
      ViewModel.currentViewer = ViewModel.ViewerList[0];
    }
    return ViewModel.currentViewer;
  }

  static renderMarkdownToHTML(markdownText: string) {
    const htmlText = ViewModel.transformMarkdownToHTMLText(markdownText);

    ViewModel.getCurrentViewer().HTMLText = htmlText;
    return ViewModel.currentViewer;
  }

  static transformMarkdownToHTMLText(markdownText: string) {
    return ViewModel.markdownIt.render(markdownText);
  }

  static registViewer(Viewer: any) {
    ViewModel.currentViewer = Viewer;
  }

  static selectViewer(selectedViewerName: string) {
    const Viewer = ViewModel.ViewerList.filter((viewer) => viewer.name === selectedViewerName)[0];
    ViewModel.registViewer(Viewer);
  }
}
