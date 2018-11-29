import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RealwordService {

  constructor(private http: HttpClient) {}

  getArticleList() {
    return this.http.get('http://localhost:3000/article');
  }

  getArticleContent(articleid) {
    return this.http.get(`http://localhost:3000/article/${articleid}`);
  }

  // createArticle(){
  //   this.http.post('http://localhost:3000/article',{"id":  });
  // }

}
