Handlebars.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
      return opts.fn(this);
  } else {
      return opts.inverse(this);
  }
})

export class Renderer {
  renderData(currentUser){
    this.renderLists(currentUser.movieLists)
  }
  renderLists(movieLists){
    const ListTemplate = Handlebars.compile($(`#search-results-template`).html())
    for (const [listName, movieList] of Object.entries(movieLists)) {
      const listsHTML = ListTemplate({ list: listName, data: movieList })
      $(`#${listName}-results`).empty().append(listsHTML)
    }
  }
  renderNav(currentData){
    console.log(currentData)
    let allUsersOptions = '<option value=0>Switch User Profile</option>'
    currentData.savedUsers.forEach(user => {
      const selected = (user.username === currentData.currentUser.username) ? 'selected=selected' :'' 
      allUsersOptions += `<option ${selected} value="${user.username}">${user.username}</option>`
    })
    $('#select-user').empty().append(allUsersOptions)
    // $('#current-username').text((currentUser === '0')? '' : currentUser)
    // let allUsersOptions = '<option value=0>Switch User Profile</option>'
    // userNames.forEach(user => {
    //   const selected = (user === currentUser) ? 'selected=selected' :'' 
    //   allUsersOptions += `<option ${selected} value="${user}">${user}</option>`
    // })
    // $('#select-user').empty().append(allUsersOptions)
  }





  



  renderTheme(themeName){
    const oppositeTheme = (themeName === 'dark') ? 'light':'dark'
    $('#dark-light-container').empty().append(`<span data-theme="${oppositeTheme}" id="theme-change">To ${oppositeTheme} Mode</span>`)
    $(":root").addClass(themeName)
    $(":root").removeClass(oppositeTheme)
  }
}