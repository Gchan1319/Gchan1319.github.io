var counter = 0;
var x = setInterval(function(){
   if(counter>=213){
      clearInterval(x);
      $("#btn").classList.remove("disabled");
      jd.innerHTML=("Data From "+counter+" Country");
      // console.log("interval was stoped")
    }else{
      jd.innerHTML=("Fetching data from "+counter+"/212 Country");
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
  let manusia = 7794798739;    
  let bendera = data.countryInfo.flag;
  let kasus = data.cases;
  let kematian = data.deaths;
  let sembuh = data.recovered;
  let populasi = data.population;
  let tes = data.tests;
  let update = data.updated;
  let tesPersen = Math.ceil((tes/populasi)*100)
  let kasusPersen = Math.ceil(((kasus/populasi)*100))
  let matiPersen = Math.ceil((kematian/populasi)*100)
  let sembuhPersen = Math.ceil((sembuh/populasi)*100)
  let popuPersen = Math.ceil((populasi/manusia)*100)
  $("#daftar").append(`<div class="col md-15"><div class="card kartu mb-3" id="${data.country}"><img src="${bendera}" class="card-img-top" alt="${data.country}"><div class="card-body"><h5 class="card-title">${data.country}</h5><p>Total Test : ${tes.toLocaleString()}</p><div class="progress"><p>${tesPersen}%</p><div class="progress-bar bg-info" role="progressbar" style="width: ${tesPersen}%" aria-valuenow="${tesPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p>Cases : ${kasus.toLocaleString()}</p><div class="progress"><p>${kasusPersen}%</p><div class="progress-bar bg-danger" role="progressbar" style="width: ${kasusPersen}%" aria-valuenow="${kasusPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p>Deaths : ${kematian.toLocaleString()}</p><div class="progress"><p>${matiPersen}%</p><div class="progress-bar bg-warning" role="progressbar" style="width: ${matiPersen}%" aria-valuenow="${matiPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p>Recovered : ${sembuh.toLocaleString()}</p><div class="progress"><p>${sembuhPersen}%</p><div class="progress-bar bg-success" role="progressbar" style="width: ${sembuhPersen}%" aria-valuenow="${sembuhPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p class="card-text">Population : ${populasi.toLocaleString()}</p><p>uptade : ${update}</p></div></div></div>`);
}).catch(Error => {
  $("#err_li").append(`<a href="#" class="dropdown-item">${i} Error !</a>`);
})
}
function fetch(){
  let i = document.getElementById('input').value;
  let apa = document.getElementById(`${i}`)
    if(apa==undefined){
    alert("404\nnegara ["+i+"] tidak ditemukan !")
    }else{
    document.location.href=`#${i}`
    apa.style.color="salmon"
    apa.style.fontWeight="bold"
   //  apa.style.backgroundColor="lightblue"
    }
 /* apa.style.position="relative"
  apa.style.backgroundColor="lightblue"
  // apa.style.boxShadow="0px 0px 15px black"
  */
setTimeout(function(){
  apa.style.color="black"
  apa.style.fontWeight="normal"
  
},3000) 
}