function myf(){
  var x=setInterval(function(){
    let i=document.getElementById('input').value;
  if(i==""){
    homeArticle.innerHTML=""
  }else if(i!=""){
    homeArticle.style.display="block";
    homeArticle.innerHTML=(`Jika ada yang masih kurang untuk tulisan [<p>${i}</p>] \nyang anda ketik silahkan hubungi <a href="https://wa.me/6285895811075?text=Hi Mr.ParadoX 👋%0Atolong tambahin font buat text ini.%0ANama Font : (isi)%0ATeks : ${encodeURI(i)}">owner</a> :v`)
    console.log("interval on")
    }
  }, 500);
    var y=setInterval(function(){
      if(i!=""){
        clearInterval(x);console.log("interval off");clearInterval(y)}
    },100000)
}
// mematikan klik kanan
var message="Function Disabled";
////////////////
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")