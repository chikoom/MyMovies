export class User {
  constructor(username){
    this._username = username
    this._watchList = {}
    this._theme = 'light'
  }
  set watchlist(movieList){
    this._watchList = movieList
  }
  get watchlist(){
    return this._watchList
  }
  set theme(themeName){
    this._theme = themeName
  }
  get theme(){
    return this._theme
  }
  get username(){
    return this._username
  }
}