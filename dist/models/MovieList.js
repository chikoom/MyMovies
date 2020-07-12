class MovieList{
  constructor(){
    this._movielist = []
  }
  get movieList(){
    return this._movielist
  }
  addMovie(movie){
    this._movielist.push(movie)
    return this._movielist
  }
  removeMovie(movieId){
    this._movielist = this._movielist.filter(movie => movie.id !== movieId)
    return this._movielist
  }
}