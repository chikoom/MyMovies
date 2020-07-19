export class API {
  searchMovie(query){
    return $.get(`/movie/${query}`)
  }
}