function myf(){
  var x=setInterval(function(){
  const i=document.getElementById('input').value;
  if(i==""){
    homeArticle.innerHTML=""
  }else if(i!=""){
    homeArticle.style.display="block";
    homeArticle.innerHTML=(`Jika ada yang masih kurang untuk tulisan <p>[${i}]</p> \nyang anda ketik silahkan hubungi <a href="https://wa.me/6285895811075?text=Hi Mr.ParadoX 👋%0Atolong tambahin font buat text ini.%0ANama Font : (isi)%0ATeks : ${encodeURI(i)}">owner</a> :v`)
    console.log("interval on")
    }
  }, 10)
    var y=setInterval(function(){
      if(i!=""){
        clearInterval(x);console.log("interval off");clearInterval(y)}
    },8000)
  }