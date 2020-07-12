export class Renderer {
  renderSearchResults(data){
    const template = Handlebars.compile($(`#search-results-template`).html());
    const HTML = template({ data })
    $('#search-results').empty().append(HTML)
  }
}