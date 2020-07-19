const express = require('express')
const axios = require('axios')

const router = express.Router()

const APIURL = `https://api.themoviedb.org/3/search/movie`
const POSTERURL = `https://image.tmdb.org/t/p/w200`

router.get('/movie/:movieName', (req, res) => {
  axios.get(APIURL, {
    params: {
      api_key: '36d6fb6f9b72120b5262096f86219df7',
      language: 'en-US',
      page: '1',
      include_adult: 'true',
      query: req.params.movieName
    }
  })
  .then(function (response) {
    res.send(response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      posterURL: POSTERURL+movie.poster_path
    })))
  })
  .catch(function (error) {
    console.log(error)
  })
})

module.exports = router