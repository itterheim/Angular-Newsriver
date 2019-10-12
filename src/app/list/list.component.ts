import { Component, OnInit } from '@angular/core';
import { NewsriverService } from '../newsriver.service';
import { IArticle } from '../models/IArticle';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public articles: IArticle[];
  public loading: boolean;
  public error: boolean;

  constructor(private newsriverService: NewsriverService) { }

  public ngOnInit() {
    this.newsriverService.articles.subscribe(data => this.articles = data);
    this.newsriverService.loading.subscribe(data => this.loading = data);
    this.newsriverService.error.subscribe(data => this.error = data);
  }

}
