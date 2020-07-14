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
    for (const [listName, movieListObject] of Object.entries(movieLists)) {
      const listsHTML = ListTemplate({ list: listName, data: movieListObject.movieList })
      $(`#${listName}-results`).empty().append(listsHTML)
    }
  }
  renderNav(userNames, currentUser){
    userNames.forEach(username => {
      
    });
  }
  
}