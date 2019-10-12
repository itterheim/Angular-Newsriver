import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../models/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() public article: IArticle;

  constructor() { }

  public ngOnInit() { }

  private hasImage(): boolean {
    return Boolean(this.article.elements && this.article.elements.filter(x => x.type === 'Image')[0]);
  }

  private getImage(): string {
    if (!this.hasImage()) { return undefined; }
    return this.article.elements.filter(x => x.type === 'Image')[0].url;
  }
}
