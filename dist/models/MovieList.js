export class MovieList{
  constructor(moviesArray){
    this._movielist = moviesArray || []
  }
  get movieList(){
    return this._movielist
  }
  getMovieById = (movieId) =>{
    return this._movielist.find(movie => movie.id === movieId)
  }
  addMovie = (movie) => {
    this._movielist.push(movie)
    movie.setCurrentList(this)
  }
  removeMovie =(movieId) =>{
    this._movielist = this._movielist.filter(movie => movie.id !== movieId)
  }
  moveToList = (newList, movieId) =>{
    newList.addMovie(this.getMovieById(movieId))
    this.removeMovie(movieId)
  }
}