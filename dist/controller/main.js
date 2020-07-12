import { APIManager } from '../models/APIManager.js'
import { Renderer } from '../views/Render.js'

const apiManager = new APIManager()
const renderer = new Renderer()

$('#btn-search').on('click', function() {
  apiManager.searchMovie($('#input-search').val())
  .then(function(result){
    renderer.renderSearchResults(result)
  })
})