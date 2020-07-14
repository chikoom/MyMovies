import { AppManager } from '../models/AppManager.js'
import { API } from '../models/API.js'
import { Renderer } from '../views/Render.js'
import { StorageManager } from '../models/StorageManager.js'

const appManager = new AppManager()
const api = new API()
const renderer = new Renderer()
const storageManager = new StorageManager()


appManager.recreateFromStorage(storageManager.getCurrentUsersData())
renderer.renderLists(appManager.getAllLists())
renderer.renderNav(storageManager.getAllUsers(), storageManager.getCurrentUser())

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
  storageManager.saveCurrentLists(appManager.getAllLists())
  renderer.renderLists(appManager.getAllLists())
})

$('main').on('click', '.remove-from-list', function(){
  const currentList = $(this).closest($('.movie-list-container')).data('listname')
  const movieId = $(this).closest('.single-movie-container').data().id
  appManager.removeItem(currentList, movieId)
  storageManager.saveCurrentLists(appManager.getAllLists())
  renderer.renderLists(appManager.getAllLists())
})

$('#save-to-storage').on('click', function(){
  const allMovieLists = appManager.getAllLists()
  storageManager.saveCurrentLists(allMovieLists)
})

$('#create-user').on('click', function(){
  const inputUsername = $('#input-username').val()
  const allMovieLists = appManager.getAllLists()
  storageManager.updateCurrentUser(inputUsername)
  storageManager.saveCurrentLists(allMovieLists)
  renderer.renderNav(storageManager.getAllUsers(), storageManager.getCurrentUser())
})