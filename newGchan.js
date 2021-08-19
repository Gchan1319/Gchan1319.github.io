function GetWaifu(){
  $.getJSON("https://api.waifu.pics/sfw/waifu",function(data){
        let url = data.url;
        let hero = document.getElementById("hero")
        hero.src=url;
        $("#hero").ready(function(){
          $("#hero").fadeOut();
          $("#hero").fadeIn();
        })
        sc.href=url;
        console.log(url);
  })
}
GetWaifu();
setInterval(GetWaifu,15000);
function pilih(){
  let a = inputGroupSelect01.value
  switch (a) {
    case 'google':
      fr.action="https://google.com/search";
      i.name="q";
      i.placeholder="Cari di Google";
      break;
    case 'duck':
      fr.action="https://duckduckgo.com/?";
      i.name="q";
      i.placeholder="Cari di DuckDuckGo";
      break;
    case 'yahoo':
      fr.action="https://id.search.yahoo.com/search";
      i.name="q";
      i.placeholder="Cari di Yahoo";
      break;
    case 'yandex':
      fr.action="https://yandex.com/search/touch?";
      i.name="text";
      i.placeholder="Cari di Yandex";
      break;
    case 'bing':
      fr.action="https://bing.com/search";
      i.name="q";
      i.placeholder="Cari di Bing"
      break;
    case 'youtube':
      fr.action="https://m.youtube.com/results";
      i.name="search_query";
      i.placeholder="Cari di YouTube";
      break;
    case 'playstore':
      fr.action = "https://play.google.com/store/search";
      i.name = "q";
      i.placeholder = "Cari di Playstore";
      break;
    case 'ecosia':
      fr.action = "https://www.ecosia.org/search";
      i.placeholder = "Cari di Ecosia";
      i.name = "q";
      break;
    case 'ask':
        fr.action = "https://www.ask.com/web";
        i.name = "q";
        i.placeholder = "Cari di Ask";
      break;
    case 'kusonime':
      fr.action="https://kusonime.com/";
      i.name="s";
      i.placeholder="Cari di Kusonime";
      break;
      case 'samehadaku':
          fr.action = "https://samehadaku.sbs/";
          i.name = "s";
          i.placeholder = "Cari di Samehadaku";
        break;
      
  }
}

$("#hero").ready(function(){
  hero.style.display="block";
})
$(document).ready(function(){
  preload.style.display="none";
})
function login(){
  login_s.classList.toggle("d-none");
  login_s.classList.toggle("opacity-0");
}
function login_send(){
  if(nama.value != "" && umur.value != ""){
  login_s.classList.toggle("d-none");
  login_s.classList.toggle("opacity-0");
  L1.classList.toggle("d-none");
  L2.classList.toggle("d-none");
  let nameP = nama.value;
  let umurP = umur.value;
  let namaR = nameP.slice(0, 27);
  user.innerHTML=namaR;
  age.innerHTML=umurP;
  logo.src="img/gw.jpg";
  }else{
    nama.classList.toggle("is-invalid");
    umur.classList.toggle("is-invalid");
    nama.placeholder="Masukan Nama !"
    umur.placeholder="Masukan Umur !"
  }
}
let audio = document.getElementById("music")
function mplay(){
  audio.play();
  audio.loop=true;;
  $(".music img").attr("src","img/music.png");
  $(".music").attr("onclick","pauseMusic()");
  var x = setInterval(warnai,100);
}
function pauseMusic(){
  audio.pause();
  $(".music img").attr("src","img/music-mute.png");
  $(".music").attr("onclick","mplay()")
}
function warnai(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var res = randomColor;
    $(".music").css("background-color",res);
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