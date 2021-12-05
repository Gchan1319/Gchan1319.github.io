function computer(arg) {
  let array = ['a','b','c'];
  let opsion = array[Math.floor(Math.random() * array.length)];
  switch (opsion) {
    case 'a':
      let a = "gunting";
      return a
    break;
    case 'b':
      let b = "batu";
      return b
    break;
    case 'c':
      let c = "kertas";
      return c
    break;
  }
}
var user_opsi = document.getElementById('userOpsi');
var comp_opsi = document.getElementById('compOpsi');
// input opsi user
function sendOpsion(pilihan){
  switch (pilihan) {
    case 'gunting':
      user_opsi.innerHTML="gunting";
      break;
    case 'batu':
      user_opsi.innerHTML="batu";
      break;
    case 'kertas':
      user_opsi.innerHTML="kertas";
      break;
}
}
// deklarasi variabel penting
var comp = document.getElementById('paramComp');
var user = document.getElementById('paramUser');
var userScore = document.getElementById('userScore');
var compScore = document.getElementById('compScore');
var match = 0;
var sc_user = 0;
var sc_comp = 0;

// fungsi mulai sebagai fungsi inti
function mulai(){
comp.classList.remove('text-info');
user.classList.remove('text-info');
comp.classList.remove('text-danger');
user.classList.remove('text-danger');
comp.classList.remove('text-success');
user.classList.remove('text-success');
comp.innerHTML="-";
user.innerHTML="-";
user_opsi.innerHTML="";
comp_opsi.innerHTML="";
let cd = document.getElementById('Time');
// pengurangan timeout
let counter = 3;
var x = setInterval(function(){
  cd.innerHTML=counter;
  counter--;
},1000)
// timeout
setTimeout(function(){
  // animasi acak opsi computer
  var pengacak = setInterval(function(){
  let b = computer();
  comp_opsi.innerHTML=b;
},10)
// 1,5 detik pertama javascript memberikan opsi acak kepada user
setTimeout(function(){
  let opsiUser = user_opsi.innerHTML;
  if (opsiUser == "") {
    user_opsi.innerHTML = computer();;
  }
},1500)
// jika timeout berakhir
setTimeout(function(){
  clearInterval(x);
  clearInterval(pengacak);
  let b = computer();
  comp_opsi.innerHTML=b;
  // memanggil fungsi logika serta mengirim informasi opsi komputer
  setTimeout(function(){
    logika(b);
  },500)
  // memulai ulang permainan
  setTimeout(mulai,3500);
},3000)
},1000)
}

// fungsi logika
function logika(opsiComp) {
  let opsiUser = user_opsi.innerHTML;
  if(opsiUser == ""){
    unknown();
  }else if(opsiUser == "gunting" && opsiComp == "kertas"){
    userMenang();
  }else if(opsiUser == "kertas" && opsiComp == "batu"){
    userMenang();
  }else if(opsiUser == "batu" && opsiComp == "gunting" ){
    userMenang();
  }else if(opsiUser == "batu" && opsiComp == "kertas"){
    compMenang();
  }else if(opsiUser == "gunting" && opsiComp == "batu"){
    compMenang();
  }else if(opsiUser == "kertas" && opsiComp == "gunting"){
    compMenang();
  }else if(opsiUser == "gunting" && opsiComp == "gunting"){
    seri();
  }else if(opsiUser == "kertas" && opsiComp == "kertas"){
    seri();
  }else if(opsiUser == "batu" && opsiComp == "batu"){
    seri();
  }
}
// variabel tambahan untuk management history
var history = document.getElementById('history');
var Uwin = 0; // user win
var Ulose = 0; // user lose
var Cwin = 0; // computer win
var Cplose = 0; // computer loss
var tie = 0; // seri
// fungsi - fungsi untuk mengeluarkan hasil pertandingan
var TGame = 0; // total game
// jika seri
function seri(){
  let a = "Seri";
  comp.innerHTML="Seri";
  comp.classList.add('text-info');
  user.innerHTML="Seri";
  user.classList.add('text-info');
  match++;
  tie++;
  TGame++;
  $("#tie").html(tie);
  $("#EvalGame").html(TGame);
  $("#history").append(`<tr><td>${match}</td><td>${a}</td><td>${a}</td><td>${sc_user}:${sc_comp}</td></tr>`);
}
// jika user tidak memilih dan syntax untuk 1,5 detik pertama error
function unknown(){
  comp.innerHTML="-";
  user.innerHTML="Belum Memilih !";
  user.classList.add('text-danger');
}
// jika computer menang
function compMenang(){
  let a = "Menang";
  let b = "Kalah";
  comp.innerHTML=a;
  comp.classList.add('text-success');
  user.innerHTML=b;
  user.classList.add('text-danger');
  sc_comp++;
  match++;
  Ulose++;
  Cwin++;
  TGame++;
  $("#Cwin").html(Cwin);
  $("#Ulose").html(Ulose);
  $("#compScore").html(sc_comp);
  $("#EvalGame").html(TGame);
  $("#history").append(`<tr><td>${match}</td><td>${b}</td><td>${a}</td><td>${sc_user}:${sc_comp}</td></tr>`);
}
// jika user menang
function userMenang(){
  let a = "Menang";
  let b = "Kalah";
  comp.innerHTML=b;
  comp.classList.add('text-danger');
  user.innerHTML=a;
  user.classList.add('text-success');
  sc_user++;
  match++;
  Uwin++;
  Cplose++;
  TGame++;
  $("#Close").html(Cplose);
  $("#Uwin").html(Uwin);
  $("#userScore").html(sc_user);
  $("#EvalGame").html(TGame);
  $("#history").append(`<tr><td>${match}</td><td>${a}</td><td>${b}</td><td>${sc_user}:${sc_comp}</td></tr>`);
}
// fungsi reset untuk mereset score dan history
function reset() {
  sc_comp = 0;
  sc_user = 0;
  match = 0;
  Uwin = 0;
  Ulose = 0;
  Cwin = 0;
  Cplose = 0;
  tie = 0;
  TGame = 0;
  $("#Close").html(Cplose);
  $("#Uwin").html(Uwin);
  $("#Cwin").html(Cwin);
  $("#Ulose").html(Ulose);
  $("#tie").html(tie);
  $("#userScore").html(sc_user);
  $("#compScore").html(sc_comp);
  $("#history tr").remove();
  $("#EvalGame").html(TGame);
}
function oke(){
  setTimeout(() => {
    $("#rules").css("max-height","0");
  mulai();
  },500)
  
}