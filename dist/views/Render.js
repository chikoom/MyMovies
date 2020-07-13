Handlebars.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
      return opts.fn(this);
  } else {
      return opts.inverse(this);
  }
})
export class Renderer {
  renderLists(movieLists){
    const template = Handlebars.compile($(`#search-results-template`).html())
    const serchHTML = template({ data: movieLists['searchList'].movieList })
    $('#search-results').empty().append(serchHTML)
    const mustHTML = template({ data: movieLists['mustList'].movieList })
    $('#must-results').empty().append(mustHTML)
    const doneHTML = template({ data: movieLists['doneList'].movieList })
    $('#done-results').empty().append(doneHTML)
  }
  
}