 /*
 var item = ['Aa','america','india','indonesia','malaysia','japan','South Korea','brazil','italy','saudi arabia','Australia','South africa','belgium','Austria','Bangladesh','Georgia','Hungary','Iraq','Iran','ireland','iceland','israel','canada','Kazakhstan','kenya','colombia','Costa rica','Morocco','Mexico','peru','chile','pakistan','germany','qatar','Venezuela','vietnam','myanmar','Papua New Guinea','taiwan','new Zealand','nepal','Madagascar','thailand','mali','paraguay','palestine','Latvia','jordan','somalia','Nicaragua','maldives','Lebanon','cuba','Mozambique','Macao','Egypt','Mongolia','Oman','Greenland','Afghanistan','Albania','Algeria','Angola','Andorra','Anguilla','Aruba','Belarus','Barbados','Bahrain','Bahamas','']
var items = item.sort();
 // console.log(items.length)
 // console.table(items);
 var counter = 0;
var x = setInterval(function(){
 // var i = item[Math.floor(Math.random() * item.length )]
 if(counter==items.length){
   $(".kartu").css("opacity",1)
   $(".c-footer").css("opacity",1)
   clearInterval(x);
   jd.innerHTML=("Data dari "+counter+" Negara")
 }else{
   counter++;
   jd.innerHTML=("Mengambil data dari "+counter+" Negara");
 var i = items[counter];
$.getJSON(`https://disease.sh/v3/covid-19/countries/${i}`,function(data){
  let bendera = data.countryInfo.flag;
  let kasus = data.cases;
  let kematian = data.deaths;
  let sembuh = data.recovered;
  let populasi = data.population;
  let tes = data.tests;
  let update = data.updated
  $("#daftar").append(`<div class="col md-15"><div class="card kartu mb-3" id="${data.country}"><img src="${bendera}" class="card-img-top" alt="${data.country}"><div class="card-body"><h5 class="card-title">${data.country}</h5><p>Total Test : ${tes.toLocaleString()}</p><p>Kasus : ${kasus.toLocaleString()}</p><p>kematian : ${kematian.toLocaleString()}</p><p>sembuh : ${sembuh.toLocaleString()}</p><p class="card-text">populasi : ${populasi.toLocaleString()}</p><p>uptade : ${update}</p></div></div></div>`)
}).catch(Error => console.table(i))
}
},10)
*/
