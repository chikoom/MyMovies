class Movie{
  constructor(id, title, imgURL){
    this._id = id
    this._title = title
    this._imgURL = imgURL
  }
  get title(){
    return this._title
  }
  get imgURL(){
    return this._imgURL
  }
  get id(){
    return this._id
  }
}