export class StorageManager{
  constructor(){
    this._currentUsersData = localStorage.getItem('users') || 
                              [{ default: {
                                  username: 'default',
                                  darkLight: 'light',
                                  watchList: {},
                                  doneList: {}
                              }}]
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
  getUserWatchlist(userName){
    return this._currentUsersData.find(user => userName === user.username).watchList
  }
  setUserWatchlist(userName, watchList){
    this._currentUsersData.find(user => userName === user.username).watchList = watchList
  }
  saveCurrentLists(userName, watchList, doneList){
    this.getUserFromStorage(userName).watchList = watchList
    this.getUserFromStorage(userName).doneList = doneList
  }
}
