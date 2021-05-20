function myf(){
     var x = setInterval(function() {
          const i = document.getElementById('input').value
          homeArticle.innerHTML=('Jika ada yang masih kurang untuk tulisan <p>['+i+']</p> yang anda ketik silahkan hubungi <a href="https://wa.me/+6285895811075">owner</a> :)')
          console.log("interval on")
          
      }, 10);
     var y = setInterval(function() {
          if(i!=""){
              clearInterval(x)
              console.log("interval off")
              clearInterval(y)
          }
      }, 5000);
}