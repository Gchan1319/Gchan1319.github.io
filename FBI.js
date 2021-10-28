function fbi(){
var input1 = i.value;
var input = input1.toLowerCase();
/* logika */
if(input=="Nekopoi"){blok()}else if(input=="hentai"){blok()}else if(input=="Hentai"){blok()}else if(input=="bokep"){blok()}else if(input=="xnxx"){blok()}else if(input=="Xnxx"){blok()}else if(input=="XNXX"){blok()}else if(input=="hentai"){blok()}else if(input=="doudesu.id"){blok()}else if(input=="doujin"){blok()}else if(input=="Doujin"){blok()}else if(input=="Nekopoi.care"){blok()}else if(input=="nekopoi.care"){blok()}else if(input=="doudesu.info"){blok()}else if(input=="overflow"){blok()}else if(input=="Overflow"){blok()}else if(input=="Kontol"){blok()}else if(input=="Memek"){blok()}else if(input=="memek"){blok()}else if(input=="kontol"){blok()}else if(input== "Jembot"){blok()}else if(input=="xvideos.com"){blok()}else if(input=="Xvideos.com"){blok()}else if(input=="XVIDEOS.com"){blok()}else if(input=="Nhentai.net"){blok()}else if(input=="nhentai.net"){blok()}else if(input=="loli"){alert("Dasar Lolicon !!")}else if(input=="Loli"){alert("Dasar Lolicon !!")}else if(input=="ngentod"){blok()}else if(input=="Ngentod"){blok()}else if(input=="ngentot"){blok()}else if(input=="Ngentot"){blok()}else if(input=="memeq"){blok()}else if(input=="Memeq"){blok()}else if(input =="Doujinsi"){blok()}else if(input=="Doujinshi"){blok()}else if(input=="doujinsi"){blok()}else if(input=="doujinshi"){blok()}else if(input=="kode nuklir"){blok()}else if(input=="Kode nuklir"){blok()}else if(input=="Kode Nuklir"){blok()}else if(input=="KODE NUKLIR"){blok()}else if(input=="kode nuklir"){blok()}else if(input=="nuklir code"){blok()}else if(input=="Nuklir code"){blok()}else if(input=="Nuklir Code"){blok()}else if(input=="bokep"){blok()}else if(input=="nuklir code"){blok()}else{unBlok()}
}// end function
function blok(){
  $("#btnsearch").addClass("disabled");
  //$("#fr").atrr("target","#body");
  let user = (nama.value+" ");
 /* notif("ID :\nTerdeteksi Pencarian 18+\nDengan Kata Kunci [ "+i.value+" ]\nTobatlah "+ user +"!!! \n"+"\n\n\nEN :\nDetected Search 18+\nWith Keywords [ " + i.value + " ]\nRepent Quickly " + user + "!!!",2000);*/
 notif("ID : Terdeteksi Pencarian 18+ !<br>EN : Detected Search 18+ !",3000);
}
function unBlok(){
  $("#btnsearch").removeClass("disabled");
}
let isOnline = navigator.onLine;
if(isOnline){
setInterval(fbi,500);
}