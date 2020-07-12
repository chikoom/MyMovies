export class APIManager {
  searchMovie(query){
    return $.get(`/movie/${query}`)
  }
}