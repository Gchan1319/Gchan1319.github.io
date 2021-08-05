 item = ['things','america','india','indonesia','malaysia','japan','South Korea','brazil','italy','saudi arabia','Australia','South africa','Armenia','belgium','Austria','Bangladesh','philippnes','Georgia','Hungary','Iraq','Iran','ireland','iceland','israel','canada','Kazakhstan','kenya','colombia','Costa rica','Morocco','Mexico','rusian','peru','chile','pakistan','turki','perancis','jerman','qatar','Venezuela','vietnam','myanmar','Papua New Guinea','taiwan','yemen','new Zealand','nepal','Madagascar','thailand','mali','paraguay','Luksemburg','palestine','Latvia','jordan','somalia','Equatorial Guinea','Nicaragua','maldives','Lebanon','cuba','Mozambique','Macao','Egypt','Mongolia','nauru','oman','greenland']
 console.log(item.length)
 var counter = 0;
var x = setInterval(function(){
 // var i = item[Math.floor(Math.random() * item.length )]
 if(counter==item.length){
   $(".kartu").css("opacity",1)
   $(".c-footer").css("opacity",1)
   clearInterval(x);
   jd.innerHTML=("Data dari "+counter+" Negara")
 }else{
counter++
jd.innerHTML=("Mengambil data dari "+counter+" Negara")
console.log(counter)
 var i = item[counter]
$.getJSON(`https://disease.sh/v3/covid-19/countries/${i}`,function(data){
  let bendera = data.countryInfo.flag;
  let kasus = data.cases;
  let kematian = data.deaths;
  let sembuh = data.recovered;
  let populasi = data.population;
  $("#daftar").append(`<div class="col md-15"><div class="card kartu mb-3" id="${data.country}"><img src="${bendera}" class="card-img-top" alt="${data.country}"><div class="card-body"><h5 class="card-title">${data.country}</h5><p>Kasus : ${kasus.toLocaleString()}</p><p>kematian : ${kematian.toLocaleString()}</p><p>sembuh : ${sembuh.toLocaleString()}</p><p class="card-text">populasi : ${populasi.toLocaleString()}</p></div></div></div>`)
});
}
},100)

function fetch(){
  let i = document.getElementById('input').value;
  let apa = document.getElementById(`${i}`)
  if(apa==undefined){
    alert("404\nnegara ["+i+"] tidak ditemukan !")
  }else{
  document.location.href=`#${i}`
 /* apa.style.position="relative"
  apa.style.backgroundColor="lightblue"
  // apa.style.boxShadow="0px 0px 15px black"
setTimeout(function(){
  apa.style.backgroundColor=""
},3000) */
}
}