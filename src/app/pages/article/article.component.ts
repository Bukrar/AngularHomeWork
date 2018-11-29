import { Component, OnInit } from '@angular/core';
import { RealwordService } from 'src/app/services/realword.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']

})
export class ArticleComponent implements OnInit {
  articleContent;
  constructor(public getarticle: RealwordService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.getarticle.getArticleContent(x['id']).subscribe(x => { this.articleContent = x });
    });
  }
}
