class Movie{
  constructor(id, title, posterURL){
    this._id = id
    this._title = title
    this._posterURL = posterURL
  }
  get title(){
    return this._title
  }
  get posterURL(){
    return this._posterURL
  }
  get id(){
    return this._id
  }
}