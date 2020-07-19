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
}
