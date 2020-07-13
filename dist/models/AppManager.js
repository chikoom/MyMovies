import { Movie } from './Movie.js'
import { MovieList } from './MovieList.js'

export class AppManager {
  constructor(){
    this._currentSearchItems = new MovieList
    this._currentMustItems = new MovieList
    this._currentDoneItems = new MovieList
  }
  get currentSearchedItems(){
    return this._currentSearchItems
  }
  get currentMustItems(){
    return this._currentMustItems
  }
  get currentDoneItems(){
    return this._currentDoneItems
  }
  createCurrentSearchList(dataArray){
    this._currentSearchItems = new MovieList(dataArray.map(movie => new Movie(movie.id, movie.title, movie.poster)))
    this._currentSearchItems.movieList.forEach(movie => movie.setCurrentList(this._currentSearchItems))
  }
  moveFromListToList(fromList, toList, movieId){
    fromList.moveToList(toList, movieId)
  }
  getAllLists = () => {
    return {
      searchList: this._currentSearchItems,
      mustList: this._currentMustItems,
      doneList: this._currentDoneItems
    }
  }
  findListWithMovie = (movieId) => {
    return(Object.values(this.getAllLists()).find(list => list.getMovieById(movieId)))
  }
  removeItem = (movieId) => {
    this.findListWithMovie(movieId).removeMovie(movieId)
  }
}