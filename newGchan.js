function GetWaifu(){
  $.getJSON("https://api.waifu.pics/sfw/waifu",function(data){
        let url = data.url;
        hero.src=url;
  })
}
GetWaifu();

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
}
function login_send(){
  if(nama.value != "" && umur.value != ""){
  login_s.classList.toggle("d-none");
  L1.classList.toggle("d-none");
  L2.classList.toggle("d-none");
  user.innerHTML=nama.value;
  age.innerHTML=umur.value;
  logo.src="img/gw.jpg";
  }else{
    nama.classList.toggle("is-invalid");
    umur.classList.toggle("is-invalid");
    nama.placeholder="Masukan Nama !"
    umur.placeholder="Masukan Umur !"
  }
}