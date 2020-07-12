class StorageManager{
  constructor(){
    this._currentUsersData = localStorage.getItem('users') || 
                              [{ default: {
                                  username: 'default',
                                  darkLight: 'light',
                                  watchList: []
                              }}]
  }
  get usersData(){
    return this._currentUsersData
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
}
