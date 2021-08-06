var counter = 0;
var x = setInterval(function(){
   if(counter>=213){
      clearInterval(x);
      $("#btn").classList.remove("disabled");
      // console.log("interval was stoped")
    }else{
      jd.innerHTML=("Mengambil data dari "+counter+"/212 Negara");
      $.getJSON('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1',function(apa){
      counter++;
    let i = apa[counter];
    var n = i.country;
    tampil(n);
})
}
},100)

function tampil(args){
  var i = args;
    $.getJSON(`https://disease.sh/v3/covid-19/countries/${i}`,function(data){
  let bendera = data.countryInfo.flag;
  let kasus = data.cases;
  let kematian = data.deaths;
  let sembuh = data.recovered;
  let populasi = data.population;
  let tes = data.tests;
  let update = data.updated
  $("#daftar").append(`<div class="col md-15"><div class="card kartu mb-3" id="${data.country}"><img src="${bendera}" class="card-img-top" alt="${data.country}"><div class="card-body"><h5 class="card-title">${data.country}</h5><p>Total Test : ${tes.toLocaleString()}</p><p>Kasus : ${kasus.toLocaleString()}</p><p>kematian : ${kematian.toLocaleString()}</p><p>sembuh : ${sembuh.toLocaleString()}</p><p class="card-text">populasi : ${populasi.toLocaleString()}</p><p>uptade : ${update}</p></div></div></div>`)
}).catch(Error => console.log(i+" error !"))
}