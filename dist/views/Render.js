Handlebars.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
      return opts.fn(this);
  } else {
      return opts.inverse(this);
  }
})

export class Renderer {
  renderLists(movieLists){
    const ListTemplate = Handlebars.compile($(`#search-results-template`).html())
    for (const [listName, movieList] of Object.entries(movieLists)) {
      const listsHTML = ListTemplate({ list: listName, data: movieList })
      $(`#${listName}-results`).empty().append(listsHTML)
    }
  }
  renderNav(userNames, currentUser){
    console.log(userNames)
    console.log(currentUser)
    $('#current-username').text(currentUser)
    let allUsersOptions = ''
    userNames.forEach(user => {
      allUsersOptions += `<option value="${user}">${user}</option>`
    })
    
    $('#select-user').append(allUsersOptions)
  }
  
}