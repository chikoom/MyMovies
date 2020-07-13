import { Movie } from './Movie.js'
import { MovieList } from './MovieList.js'

export class AppManager {
  constructor(){
    this._currentSearchItems = new MovieList
    this._currentMustItems = new MovieList
    this._currentDoneItems = new MovieList
  }
  createCurrentSearchList(dataArray){
    this._currentSearchItems = new MovieList(dataArray.map(movie => new Movie(movie.id, movie.title, movie.poster)))
  }
  moveFromListToList(fromList, toList, movieId){
    fromList.moveToList(toList, movieId)
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
  getAllLists = () => {
    return {
      searchList: this._currentSearchItems,
      mustList: this._currentMustItems,
      doneList: this._currentDoneItems
    }
  }
}