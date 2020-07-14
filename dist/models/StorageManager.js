export class StorageManager{
  constructor(){
    this._currentUsersData = JSON.parse(localStorage.getItem('users')) || 
                              { default: {
                                  username: 'default',
                                  darkLight: 'light',
                                  watchList: {},
                                  doneList: {}
                              }}
    this._lastLoggedUser = localStorage.getItem('lastLoggedUser') || 'default'
    this._allUsers = Object.keys(this._currentUsersData)
  }
  saveCurrentLists(movieLists){
    this._currentUsersData[this._lastLoggedUser] = {
      username: this._lastLoggedUser,
      darkLight: 'light',
      mustList: movieLists['must'],
      doneList: movieLists['done']
    }
    localStorage.setItem('users', JSON.stringify(this._currentUsersData))
    localStorage.setItem('lastLoggedUser', this._lastLoggedUser)
  }
  updateCurrentUser(userName){
    this._lastLoggedUser = userName
  }
  getCurrentUsersData(){
    return this._currentUsersData[this._lastLoggedUser]
  }
  getAllUsers(){
    return this._allUsers
  }
  getCurrentUser(){
    return this._lastLoggedUser
  }






  simplifyList(movielist){
    return {
      movielist: movielist.map(movie => movie.simpleVersion()),
      typeName: movielist.typeName
    }
  }
  

  get usersData(){
    return this._currentUsersData
  }
  getUserFromStorage(userName){
    return this._currentUsersData[userName] || this._currentUsersData['default']
  }
  getUserTheme(userName){
    return this._currentUsersData.find(user => userName === user.username).darkLight
  }
  setUserTheme(userName, theme){
    this._currentUsersData.find(user => userName === user.username).darkLight = theme
  }
  
  saveToStorage(usersData){
    localStorage.setItem('users', JSON.stringify(usersData))
    localStorage.setItem('lastLoggedUser', userName)
  }
  get lastLoggedUser(){
    return this._lastLoggedUser
  }
}
