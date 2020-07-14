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
  saveCurrentLists(userName, movieLists){
    this._currentUsersData[userName] = {
      username: userName,
      darkLight: 'light',
      watchList: movieLists.mustList.simpleVersion(),
      doneList: movieLists.doneList.simpleVersion()
    }
    localStorage.setItem('users', JSON.stringify(this._currentUsersData))
    localStorage.setItem('lastLoggedUser', userName)
  }
  saveToStorage(usersData){
    localStorage.setItem('users', JSON.stringify(usersData))
    localStorage.setItem('lastLoggedUser', userName)
  }
  get lastLoggedUser(){
    return this._lastLoggedUser
  }
}
