import { Movie } from './Movie.js'
import { MovieList } from './MovieList.js'

export class AppManager {
  constructor(){
    this.movieLists = {
      search: new MovieList([],'search'),
      must: new MovieList([],'must'),
      done: new MovieList([],'done')
    }
  }
  getAllLists(){
    return this.movieLists
  }
  updateMovieList(listName, dataArray){
    const newMovieArray = dataArray.map(movie => new Movie(movie.id, movie.title, movie.poster))
    this.movieLists[listName] = new MovieList(newMovieArray, listName)
  }
  moveFromListToList(fromList, toList, movieId){
    this.movieLists[fromList].moveToList(this.movieLists[toList], movieId)
  }




  createCurrentSearchList(dataArray){
    this._currentSearchItems = new MovieList(dataArray.map(movie => new Movie(movie.id, movie.title, movie.poster)),'search')
    this._currentSearchItems.movieList.forEach(movie => movie.setCurrentList(this._currentSearchItems))
  }
  // moveFromListToList(fromList, toList, movieId){
  //   fromList.moveToList(toList, movieId)
  // }
  
  findListWithMovie = (movieId) => {
    return(Object.values(this.getAllLists()).find(list => list.getMovieById(movieId)))
  }
  removeItem = (movieId) => {
    this.findListWithMovie(movieId).removeMovie(movieId)
  }
  save
}