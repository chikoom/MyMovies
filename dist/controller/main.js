import { AppManager }     from '../models/AppManager.js'
import { APIManager }     from '../models/APIManager.js'
import { Renderer }       from '../views/Render.js'
import { StorageManager } from '../models/StorageManager.js'

const appManager      =  new AppManager()
const apiManager      =  new APIManager()
const renderer        =  new Renderer()
const storageManager  =  new StorageManager()
console.log(storageManager)

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

$('#must-results').on('click', '.add-to-done', function() {
  appManager.moveFromListToList(
    appManager.currentMustItems,
    appManager.currentDoneItems,
    $(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('#done-results').on('click', '.add-to-must', function() {
  appManager.moveFromListToList(
    appManager.currentDoneItems,
    appManager.currentMustItems,
    $(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('#search-results').on('click', '.add-to-done', function() {
  appManager.moveFromListToList(
    appManager.currentSearchedItems,
    appManager.currentDoneItems,
    $(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('main').on('click', '.remove-from-list', function(){
  appManager.removeItem($(this).closest('.single-movie-container').data().id)
  renderer.renderLists(appManager.getAllLists())
})

$('#save-to-storage').on('click', function(){
  appManager.getAllLists()
  storageManager.saveCurrentLists('default', watchList, doneList)
})

/*

{ 
  users : [
    {
      default: {
        username: 'default',
        darkLight: 'light',
        watchList: {},
        doneList: {}
      },
      idan: {
        username: 'idan',
        darkLight: 'light',
        watchList: {},
        doneList: {}
      }
    }
  ]
}

*/