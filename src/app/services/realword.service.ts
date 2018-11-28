import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RealwordService {

  //articleData;
  //articleContent;
  constructor(private http: HttpClient) {
    //this.http.get('http://localhost:3000/article').subscribe(x => this.articleData = x);
  }

  getcontent() {
    return this.http.get('http://localhost:3000/posts')
  }

  getArticleList() {
    return this.http.get('http://localhost:3000/article');
  }

  getArticleContent(articleid) {
    // return this.http.get('http://localhost:3000/article' );
    return this.http.get(`http://localhost:3000/article/${articleid}`);
  }

}
