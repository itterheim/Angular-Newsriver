import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../models/Filter';
import { NewsriverService } from '../newsriver.service';

const texts = [
  'fountain pen',
  'Rezz',
  'Mau5trap',
  'Alison Wonderland',
  'Atheism',
  'Aurora Aksnes',
  'Christopher Hitchens'
];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() public filter: Filter = new Filter(texts[Math.floor(Math.random() * texts.length)]);

  constructor(private newsriverService: NewsriverService) { }

  public ngOnInit() { }

  public submit() {
    if (this.filter.text && this.filter.text.length > 0) {
      this.newsriverService.getNews(this.filter);
    }
  }
}
