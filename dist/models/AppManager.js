import { Movie } from './Movie.js'
// import { MovieList } from './MovieList.js'

export class AppManager {
  constructor(){
    this.movieLists = {
      search: [],
      must: [],
      done: []
    }
  }
  getAllLists(){
    return this.movieLists
  }
  updateMovieList(listName, dataArray){
    dataArray.forEach(movie => {
      this.movieLists[listName].push(new Movie(movie.id, movie.title, movie.posterURL))
    })
  }
  moveFromListToList(fromList, toList, movieId){
    const movieIndex = this.movieLists[fromList].findIndex(movie => movie.id === movieId)
    this.movieLists[toList].push(this.movieLists[fromList][movieIndex])
    this.movieLists[fromList].splice(movieIndex, 1)
  }
  recreateFromStorage(storedData){
    this.updateMovieList('done', storedData.doneList)
    this.updateMovieList('must', storedData.mustList)
  }
  removeItem = (movieList, movieId) => {
    this.movieLists[movieList] = this.movieLists[movieList].filter(movie => movie.id !== movieId)
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
  save
}