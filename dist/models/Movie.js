export class Movie {
  constructor(id, title, posterURL){
    this.id = id
    this.title = title
    this.posterURL = posterURL
    this.currentList = {}
  }
  setCurrentList(movieList){
    this.currentList = movieList
  }
  simpleVersion(){
    return {
      id: this.id,
      title: this.title,
      posterURL: this.posterURL,
    }
  }
}