import { Component, OnInit } from '@angular/core';
import { RealwordService } from 'src/app/services/realword.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articleList;
  constructor(private getArticle: RealwordService) { }

  ngOnInit() {
    this.articleList = this.getArticle.getArticleList().subscribe(x => this.articleList = x);
  }

}
