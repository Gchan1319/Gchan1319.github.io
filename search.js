function search(){
  let query = document.getElementById("i").value;
  
  let ApiKey = "AIzaSyDO2dv12hNVuiL0O62L8BDIZnJnzdnMEVQ";
  $.getJSON(`https://www.googleapis.com/customsearch/v1?key=${ApiKey}&cx=013036536707430787589:_pqjad5hr1a&gl=id&cr=id&googlehost=google.id&q=${query}&alt=json`,function(data){
    $(".container-search").remove();
    let result_search = data.items;
    //console.log(data.queries.request[0].count)
    try {
      for (var i = 0; i < result_search.length; i++) {
      let dataResult = result_search[i];
      let title = dataResult.title;
      let link = dataResult.link;
      let thumbnail_search = dataResult.pagemap.cse_thumbnail[0].src;
      let paragraph = dataResult.snippet;
      console.log(title)
      $("#resultSEO").append(` <div class="container-search"><a href="${link}"><div class="judul-search"><img class="d-inline" src="${thumbnail_search}" alt="" /><h1 class="d-inline">${title}</h1></div></a><div class="search-desc"><p>${paragraph}</p></div></div>`);
    }
    } catch (e) {
      //$("#resultSEO").append(`<div class="container-search"><h1 class="text-center">Not Found!</h1></div>`);
    }
    
  });
}
function clearSearchResult(){
  $(".container-search").remove();
}