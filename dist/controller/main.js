import { AppManager }   from '../models/AppManager.js'
import { APIManager }   from '../models/APIManager.js'
import { Renderer }     from '../views/Render.js'

const appManager  =  new AppManager()
const apiManager  =  new APIManager()
const renderer    =  new Renderer()

$('#btn-search').on('click', function() {
  apiManager.searchMovie($('#input-search').val())
  .then( result => {
    appManager.createCurrentSearchList(result)
    renderer.renderLists(appManager.getAllLists())
  })
})

$('#search-results').on('click', '.add-to-must', function() {
  appManager.moveFromListToList(
    appManager.currentSearchedItems,
    appManager.currentMustItems,
    $(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('#must-results').on('click', '.add-to-must', function() {
  appManager.moveFromListToList(
    appManager.currentMustItems,
    appManager.currentDoneItems,
    $(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('main').on('click', '.remove-from-list', function(){
  appManager.removeItem($(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})