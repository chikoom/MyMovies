import { AppManager } from '../models/AppManager.js'
import { API } from '../models/API.js'
import { Renderer } from '../views/Render.js'
import { StorageManager } from '../models/StorageManager.js'

const appManager = new AppManager()
const api = new API()
const renderer = new Renderer()
const storageManager = new StorageManager()

const savedData = storageManager.getSavedData()
appManager.initiateFromStorage(savedData)
renderer.renderData(appManager.getCurrentUser())
renderer.renderNav(appManager.getCurrentData())

$('#btn-search').on('click', function() {
  const searchQueary = $('#input-search').val()
  api.searchMovie(searchQueary).then( result => {
    appManager.createList('search',result)
    renderer.renderLists(appManager.getAllLists())
  })
})

$('main').on('click', '.move-to-list', function() {
  const currentList = $(this).closest($('.movie-list-container')).data('listname')
  const targetList = $(this).data('target')
  const movieId = $(this).closest('.single-movie-container').data().id
  appManager.moveFromListToList(currentList, targetList,movieId)
  storageManager.saveCurrentUser(appManager.getCurrentUser())
  renderer.renderLists(appManager.getAllLists()) 
})

$('main').on('click', '.remove-from-list', function(){
  const currentList = $(this).closest($('.movie-list-container')).data('listname')
  const movieId = $(this).closest('.single-movie-container').data().id
  appManager.removeItem(currentList, movieId)
  storageManager.saveCurrentUser(appManager.getCurrentUser())
  renderer.renderLists(appManager.getAllLists())
})

$('#create-user').on('click', function(){
  const inputUsername = $('#input-username').val()
  if(inputUsername.length > 1){
    const newUser = appManager.createNewUser(inputUsername)
    storageManager.saveCurrentUser(newUser)
  }
  renderer.renderNav(appManager.getCurrentData())
})

$('#select-user').on('change', function(){
  //const themeName = $('#theme-change').data('theme')
  const selectedUserName = $(this).val()

  //renderer.renderTheme(storageManager.getTheme() || storageManager.setTheme(themeName))
  appManager.loadUser(selectedUserName)
  renderer.renderLists(appManager.getAllLists())

  // storageManager.updateCurrentUser((selectedUserName === '0')? '0':selectedUserName)
  // appManager.clearMovieLists()
  // appManager.recreateFromStorage(storageManager.getCurrentUsersData(),storageManager.getCurrentUser())
  // renderer.renderLists(appManager.getAllLists())
  // renderer.renderNav(storageManager.getAllUsers(), storageManager.getCurrentUser())
  
})















$('#save-to-storage').on('click', function(){
  const allMovieLists = appManager.getAllLists()
  storageManager.saveCurrentLists(allMovieLists)
})





$('#dark-light-container').on('click', '#theme-change', function() {
  const themeName = $('#theme-change').data('theme')
  console.log(themeName)
  storageManager.setTheme(themeName)
  renderer.renderTheme(themeName)
  const allMovieLists = appManager.getAllLists()
  storageManager.saveCurrentLists(allMovieLists)
})
