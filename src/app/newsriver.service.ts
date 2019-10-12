import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filter } from './models/Filter';
import { BehaviorSubject } from 'rxjs';
import { IArticle } from './models/IArticle';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class NewsriverService {
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public error: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public articles: BehaviorSubject<IArticle[]> = new BehaviorSubject(undefined);

  // private websocket: WebSocketSubject<any>;
  private headers: HttpHeaders;

  private readonly baseUrl: string = 'https://api.newsriver.io/v2/search';
  private readonly token: string = 'sBBqsGXiYgF0Db5OV5tAwxuSYbhPkmoXXVSy9uh1Jq5gxPQdn0Kczl3m0jBPgmpen2pHZrSf1gT2PUujH1YaQA';

  constructor(private httpService: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: this.token
    });
    this.articles.subscribe(() => this.loading.next(false));

    // Yep, WebSocket works too

    // this.websocket = webSocket(`wss://api.newsriver.io/v2/search-stream?token=${this.token}`);
    // this.websocket.subscribe(
    //   msg => this.articles.next([msg])
    // );
    // this.websocket.next({ limit: 1, query: 'Apple OR Microsoft OR Intel' });
  }

  public getNews(filter: Filter) {
    this.loading.next(true);
    this.error.next(false);

    const query = this.toQueryString(filter);
    this.httpService.get<IArticle[]>(`${this.baseUrl}?${query}`, { headers: this.headers })
      .subscribe(
        data => {
          this.articles.next(data);
          this.error.next(false);
        },
        err => {
          this.articles.next(undefined);
          this.error.next(true);
          console.log(err);
        }
      );
  }

  private toQueryString(filter: Filter): string {
    const query: string[] = [];
    query.push(`query=${filter.type}%3A${filter.text}`);
    query.push(`sortBy=${filter.sortBy}`);
    query.push(`sortOrder=${filter.sortOrder}`);
    query.push(`limit=${filter.limit}`);

    return query.join('&');
  }
}
