$("#tema").attr("onclick",`ganti(${true})`);
$("#logo").attr("src","img/UserNone-light.png");
var cookie = Cookies.get("tema");
if(cookie != null){
  if(cookie == "dark"){
    ganti(true);
    $("#tema").attr("onclick",`ganti(${false})`);
  }
}
var isLogin = false;
function ganti(isDark){
  if(isDark){
  Cookies.set("tema","dark");
  $("#tema").removeClass("moon");
  $("#tema").attr("onclick",`ganti(${false})`);
  $("#tema").addClass("sun");
  $(".container").addClass("bg-dark");
  $(".container-fluid").addClass("bg-dark");
  $("body").addClass("bg-dark");
  $("nav").addClass("bg-dark");
  $("nav").removeClass("blend");
  $(".nav").removeClass("navbar-light");
  $(".nav").addClass("navbar-dark");
  $("#login_s").removeClass("blend");
  $("#login_s").addClass("bg-dark");
  $("#login_s").addClass("text-light");
  $(".container-fluid").addClass("text-light");
  $(".fb").removeClass("fb-light");
  $(".ig").removeClass("ig-light");
  $(".fb").addClass("fb-dark");
  $(".ig").addClass("ig-dark");
  if(!isLogin){
    $("#logo").attr("src","img/UserNone-dark.png");
  }
  }else{
  if(!isLogin){
  $("#logo").attr("src","img/UserNone-light.png");
  }
  Cookies.remove("tema");
  $("#tema").removeClass("sun");
  $("#tema").attr("onclick",`ganti(${true})`);
  $("#tema").addClass("moon");
  $(".container").removeClass("bg-dark");
  $(".container-fluid").removeClass("bg-dark");
  $("body").removeClass("bg-dark");
  $("nav").removeClass("bg-dark");
  $("nav").addClass("blend");
  $(".nav").addClass("navbar-light");
  $(".nav").removeClass("navbar-dark");
  $("#login_s").addClass("blend");
  $("#login_s").removeClass("bg-dark");
  $("#login_s").removeClass("text-light");
  $(".container-fluid").removeClass("text-light");
  $(".fb").addClass("fb-light");
  $(".ig").addClass("ig-light");
  $(".fb").removeClass("fb-dark");
  $(".ig").removeClass("ig-dark");
  }
}
function GetWaifu(){
  $.getJSON("https://api.waifu.pics/sfw/waifu",function(data){
        let url = data.url;
        let hero = document.getElementById("hero")
        $("#hero").attr("src",url)
        $("#hero").ready(function(){
          $("#hero").fadeOut();
          $("#hero").fadeIn();
        })
        sc.href=url;
        console.log(url);
  })
}
function zoom(){
  $("#content").addClass("zooming");
}
GetWaifu();
var x = setInterval(GetWaifu,15000);
function pilih(){
  let a = inputGroupSelect01.value
  switch (a) {
    case 'google':
      fr.action="https://google.com/search";
      i.name="q";
      i.placeholder="Search On Google";
      break;
    case 'duck':
      fr.action="https://duckduckgo.com/?";
      i.name="q";
      i.placeholder="Search On DuckDuckGo";
      break;
    case 'yahoo':
      fr.action="https://id.search.yahoo.com/search";
      i.name="q";
      i.placeholder="Search On Yahoo";
      break;
    case 'yandex':
      fr.action="https://yandex.com/search/touch?";
      i.name="text";
      i.placeholder="Search On Yandex";
      break;
    case 'bing':
      fr.action="https://bing.com/search";
      i.name="q";
      i.placeholder="Search di Bing"
      break;
    case 'youtube':
      fr.action="https://m.youtube.com/results";
      i.name="search_query";
      i.placeholder="Search di YouTube";
      break;
    case 'playstore':
      fr.action = "https://play.google.com/store/search";
      i.name = "q";
      i.placeholder = "Search On Playstore";
      break;
    case 'ecosia':
      fr.action = "https://www.ecosia.org/search";
      i.placeholder = "Cari di Ecosia";
      i.name = "q";
      break;
    case 'ask':
        fr.action = "https://www.ask.com/web";
        i.name = "q";
        i.placeholder = "Search On Ask";
      break;
    case 'kusonime':
      fr.action="https://kusonime.com/";
      i.name="s";
      i.placeholder="Search On Kusonime";
      break;
      case 'samehadaku':
          fr.action = "https://samehadaku.sbs/";
          i.name = "s";
          i.placeholder = "Search On Samehadaku";
        break;
      
  }
}
function cek(){
  $("#login_s").css("max-height","0");
}
$("#hero").ready(function(){
  hero.style.display="block";
})
$(document).ready(function(){
  preload.style.display="none";
})
function login(){
  $("#login_s").css("max-height","100%");
  $("#login_s").toggleClass("sctop")
}

function login_send(){
  let info = $.getJSON("log.json",function(data){
  let username = data.username
  if(nama.value == username){
    $("#login_s").css("max-height","0");
    $("#L1").addClass("d-none");
    $("#L2").toggleClass("d-none");
    let nameP = nama.value;
    let umurP = umur.value;
    let namaR = nameP.slice(0, 27);
    user.innerHTML = "Admin"
    age.innerHTML = umurP;
    $("#fr").attr("onclick","");
    $("#logo").attr("src","img/gw.jpg");
     $.getJSON("https://api.db-ip.com/v2/free/self", function(data) {
       console.log(data)
       let ip = data.ipAddress;
       $("#music").attr("src","sound/MyWar.mp3");
       $("#body").append(`<div class="musicbtn blend musicmuted" onclick="mplay()"><img src="img/music-mute.png" class="img-fluid rounded rounded-circle" alt="playButton" /></div>`);
       let country = data.countryName
       $("#ip").append(`${ip} From ${country}`);
     })
     isLogin = true;
     let piranti = navigator.userAgent;
     $("#device").append(`${piranti}`);
  }else if(nama.value != "" && umur.value != ""){
  $("#login_s").css("max-height","0");
  $("#L1").addClass("d-none");
  $("#L2").toggleClass("d-none");
  let nameP = nama.value;
  let umurP = umur.value;
  let namaR = nameP.slice(0, 27);
  user.innerHTML=namaR;
  age.innerHTML=umurP;
  $("#logo").attr("src","img/gw.jpg");
   $.getJSON("https://api.db-ip.com/v2/free/self", function(data) {
     console.log(data)
     let ip = data.ipAddress;
     let country = data.countryName
     $("#ip").append(`${ip} From ${country}`);
   })
   $("#music").attr("src","sound/MyWar.mp3");
   $("#body").append(`<div class="musicbtn musicmuted" onclick="mplay()"><img src="img/music-mute.png" class="img-fluid rounded rounded-circle" alt="playButton" /></div>`);
   isLogin = true;
   let piranti = navigator.userAgent;
   $("#device").append(`${piranti}`);
  }else{
    nama.classList.toggle("is-invalid");
    umur.classList.toggle("is-invalid");
    nama.placeholder="Enter Your Name !"
    umur.placeholder="Enter Your Age !"
  }
  });
}
let audio = document.getElementById("music")
function mplay(){
  audio.play();
  audio.loop=true;;
  $(".musicbtn img").attr("src","img/music.png");
  $(".musicbtn").attr("onclick","pauseMusic()");
  $(".musicbtn").addClass("music");
  $(".musicbtn").removeClass("musicmuted");
  setInterval(warnai,100);
}
function pauseMusic(){
  audio.pause();
  $(".musicbtn").css("background","#0BF3C5")
  $(".musicbtn img").attr("src","img/music-mute.png");
  $(".musicbtn").attr("onclick","mplay()")
  $(".musicbtn").toggleClass("music");
  $(".musicbtn").addClass("musicmuted");
}
function warnai(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var res = randomColor;
    $(".music").css("background",res);
}
/*
function youtube(){
  let text = i.value
  alert(text)
  $.getJSON(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${text}&type=video&key=AIzaSyBq4LasG4soWNJVa9dFqEdpVZpmb27No3s`,function(data){
    let item = data.items
    for (var i = 0; i < 20; i++) {
      let items = item[i];
      let vidId = items.id.videoId
      let url = `https://www.youtube.com/embed/${vidId}?rel=0`
      console.log(url)
      let snipet = items.snippet
      $('#content').append(`<h5 class="text-center"></h5><iframe class="ratio ratio-16x9" src="${url}" allowfullscreen></iframe>`)
    }
  }).catch(Error => console.log(Error))
  
}
*/
/*
let Thisport = window.location.port
$("iframe").attr("src",`https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/file/d/1G2rQ7ZgqUbRRXfF2ZaO2YRo3Y_IBy37V/view?usp=drivesdk`)
*/
