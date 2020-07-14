export class Movie {
  constructor(id, title, posterURL){
    this.id = id
    this.title = title
    this.posterURL = posterURL
    this.currentList = {}
  }
}