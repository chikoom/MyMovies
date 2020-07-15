import { User } from './User.js'
export class StorageManager{
  constructor(){
    this.currentSavedData = JSON.parse(localStorage.getItem('MyMovies')) || 
    {
      lastLoggedUser: 'default',
      savedUsers: []
    }
  }
  getSavedData(){
    return this.currentSavedData
  }
  saveCurrentUser(currentUser){
    if(currentUser.username && currentUser.username !== 'default'){
      this.currentSavedData.lastLoggedUser = currentUser.username
      this.currentSavedData.savedUsers = this.currentSavedData.savedUsers.filter(user => user.username !== currentUser.username)
      this.currentSavedData.savedUsers.push(currentUser)
      localStorage.setItem('MyMovies', JSON.stringify(this.currentSavedData))
    }
  }
















  saveCurrentLists(movieLists){

    this.currentSavedData





    this._currentUsersData[this._lastLoggedUser] = {
      username: this._lastLoggedUser,
      darkLight: this._currentUsersData[this._lastLoggedUser].darkLight,
      must: movieLists['must'],
      done: movieLists['done']
    }
    localStorage.setItem('users', JSON.stringify(this._currentUsersData))
    localStorage.setItem('lastLoggedUser', this._lastLoggedUser)
  }











  updateCurrentUser(userName){
    this._lastLoggedUser = userName
    localStorage.setItem('lastLoggedUser', this._lastLoggedUser)
  }
  getCurrentUsersData(){
    return this._currentUsersData
  }
  getAllUsers(){
    return this._allUsers
  }
  getCurrentUser(){
    return this._lastLoggedUser
  }
  setTheme(themeName){
    this._currentUsersData[this._lastLoggedUser].darkLight = themeName
  }
  getTheme(){
    return this._currentUsersData[this._lastLoggedUser].darkLight
  }
}
