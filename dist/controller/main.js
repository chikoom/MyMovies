import { AppManager } from '../models/AppManager.js'
import { API } from '../models/API.js'
import { Renderer } from '../views/Render.js'
import { StorageManager } from '../models/StorageManager.js'

const appManager = new AppManager()
const api = new API()
const renderer = new Renderer()
const storageManager = new StorageManager()

$('#btn-search').on('click', function() {
  const searchQueary = $('#input-search').val()
  api.searchMovie(searchQueary).then( result => {
    appManager.updateMovieList('search', result)
    renderer.renderLists(appManager.getAllLists())
  })
})

$('main').on('click', '.move-to-list', function() {
  const currentList = $(this).closest($('.movie-list-container')).data('listname')
  const targetList = $(this).data('target')
  appManager.moveFromListToList(currentList, targetList,
    $(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('main').on('click', '.remove-from-list', function(){
  appManager.removeItem($(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('#save-to-storage').on('click', function(){
  const inputUsername = $('#input-username').val()
  const allMovieLists = appManager.getAllLists()
  storageManager.saveCurrentLists(inputUsername, allMovieLists)
})