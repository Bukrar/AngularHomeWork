export interface IArticle {
  id,
  title,
  author,
  date,
  likeNumber,
  content
}

export class Article implements IArticle {
  constructor(
    public id :number,
    public title:string,
    public author:string,
    public date:string,
    public likeNumber:number,
    public content:string,
  ){}

}
