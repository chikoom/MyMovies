export class User {
  constructor(username, must, done, theme){
    this.username = username || 'default'
    this.movieLists = {
      search:[],
      must:must || [],
      done:done || []
    }
    theme = theme || 'light'
  }}