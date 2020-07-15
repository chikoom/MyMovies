import { Movie } from './Movie.js'
import { User } from './User.js'
// import { MovieList } from './MovieList.js'

export class AppManager {
  constructor(){
    this.movieLists = {
      search: [],
      must: [],
      done: []
    }

    this.currentUser = new User('default', [], [], 'light')
    this.savedUsers = []
  }
  initiateFromStorage(savedData){
    if(savedData.lastLoggedUser !== 'default'){
      this.currentUser = savedData.savedUsers.find(user => user.username === savedData.lastLoggedUser)
    }
    this.savedUsers = savedData.savedUsers
  }
  getCurrentData(){
    return {
      currentUser: this.currentUser,
      savedUsers: this.savedUsers
    }
  }
  getCurrentUser(){
    return this.currentUser
  }
  createList = (listName, data) => {
    this.currentUser.movieLists[listName] = data.map(movie => new Movie(movie.id, movie.title, movie.posterURL))
  }
  moveFromListToList(fromList, toList, movieId){
    const movieIndex = this.currentUser.movieLists[fromList].findIndex(movie => movie.id === movieId)
    this.currentUser.movieLists[toList].push(this.currentUser.movieLists[fromList][movieIndex])
    this.currentUser.movieLists[fromList].splice(movieIndex, 1)
  }
  removeItem = (movieList, movieId) => {
    this.currentUser.movieLists[movieList] = this.currentUser.movieLists[movieList].filter(movie => movie.id !== movieId)
  }
  setCurrentUsername(username){
    this.currentUser.username = username
    console.log(this.currentUser)
  }
  getAllLists(){
    return this.currentUser.movieLists
  }
  createNewUser(username){
    this.currentUser = new User(username, this.currentUser.movieLists.must, this.currentUser.movieLists.done, this.currentUser.theme)
    this.savedUsers.push(this.currentUser)
    return this.currentUser
  }
  loadUser(username){
    if(username == 0)
      this.currentUser = new User('default')
    else
      this.currentUser = this.savedUsers.find(user => user.username === username)
      this.currentUser.movieLists.search = []
  }
  getCurrentUserTheme(){
    return this.currentUser.theme
  }
  setUserTheme(themeName){
    this.currentUser.theme = themeName
  }
}