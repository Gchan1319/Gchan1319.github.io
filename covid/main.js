var data_vaksin;
function getVaksin(){
$.getJSON('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1',function(dataVaccine){
  data_vaksin = dataVaccine;
 // console.log(dataVaccine)
})
}
getVaksin();
/*
setTimeout(() => {
  let a = data_vaksin[0];
  console.table(a.country)
},3000)
*/
var counter = 0;
var x = setInterval(function(){
   if(counter>=213){
      clearInterval(x);
      //$("#btn").classList.remove("disabled");
      jd.innerHTML=("Data From "+counter+" Country");
      // console.log("interval was stoped")
    }else{
      jd.innerHTML=("Fetching data from "+counter+"/212 Country");
      $.getJSON('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1',function(apa){
      counter++;
    let i = apa[counter];
    var n = i.country;
    setTimeout(() => {
      tampil(n);
    },2000)
})
}
},100)
let c = 0;
function tampil(args){
  var i = args;
  let a = data_vaksin[c];
  c++;
    $.getJSON(`https://disease.sh/v3/covid-19/countries/${i}`,function(data){
  let manusia = 7794798739;    
  let bendera = data.countryInfo.flag;
  let kasus = data.cases;
  let kematian = data.deaths;
  let sembuh = data.recovered;
  let populasi = data.population;
  // let popuPersen = Math.floor((populasi/manusia)*100)
  let tes = data.tests;
  let update = data.updated;
  let tgl = new Date().getDate(update);
  let bln = new Date().getMonth(update);
  let thn = new Date().getFullYear(update);
  let jam = new Date().getHours(update);
  let menit = new Date().getMinutes(update);
  let detik = new Date().getSeconds(update);
  // let day = new Date().getUTCDay(update);
  let update_tanggal = `${tgl}/${bln}/${thn} ${jam}:${menit}:${detik}`;
  let tesPersen = Math.ceil((tes/populasi)*100);
  let kasusPersen = Math.ceil(((kasus/populasi)*100));
  let matiPersen = Math.ceil((kematian/kasus)*100);
  let sembuhPersen = Math.ceil((sembuh/kasus)*100);
  let popuPersen = Math.ceil((populasi/manusia)*100);
  if(tesPersen >= 100){
    tesPersen == 100;
  }
  $("#daftar").append(`<div class="col md-5"><div class="card kartu mb-3" id="${data.country}"><img src="${bendera}" class="card-img-top" alt="${data.country}"><div class="card-body"><h5 class="card-title">${data.country}</h5><p><z>Total Tests :</z>${tes.toLocaleString()}</p><div class="progress"><p>${tesPersen}%</p><div class="progress-bar bg-info" role="progressbar" style="width: ${tesPersen}%" aria-valuenow="${tesPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p><z>Cases :</z>${kasus.toLocaleString()}</p><div class="progress"><p>${kasusPersen}%</p><div class="progress-bar bg-danger" role="progressbar" style="width: ${kasusPersen}%" aria-valuenow="${kasusPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p><z>Deaths :</z>${kematian.toLocaleString()}</p><div class="progress"><p>${matiPersen}%</p><div class="progress-bar bg-warning" role="progressbar" style="width: ${matiPersen}%" aria-valuenow="${matiPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p><z>Recovered :</z>${sembuh.toLocaleString()}</p><div class="progress"><p>${sembuhPersen}%</p><div class="progress-bar bg-primary" role="progressbar" style="width: ${sembuhPersen}%" aria-valuenow="${sembuhPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p class="card-text"><z>Population :</z>${populasi.toLocaleString()}</p><div class="progress"><p>${popuPersen}%</p><div class="progress-bar bg-secondary text-auto" role="progressbar" style="width: ${popuPersen}%" aria-valuenow="${popuPersen}" aria-valuemin="0" aria-valuemax="100"></div></div><p class="mt-3">Update : <z  style="font-size:12px;">${update_tanggal}</z></p></div></div></div>`);
}).catch(err => {
  let msg = err.responseJSON.message;
  $("#err_li").append(`<a href="#" class="dropdown-item">${i} <r>Error !</r><br/><r>#!</r> ${msg.slice(0,17)}</a>`);
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