
// Function For Toggle Side bar
menu.addEventListener('click',function(){
   if (menu.style.transform == "rotate(0deg)") {
     side.style.transform = "translateX(100%)"
     menu.style.transform="rotate(1deg)"
   }else{
  side.style.transform="translateX(0)"
  menu.style.transform="rotate(0deg)"
   }
})
i_user.addEventListener('click',function(){
  login.style.display="block"
});
// Pick A Random Gif If page is Loaded / Opened
var item = ["https://media.tenor.com/images/0ea0eefe30a059d8708647b9f27696d1/tenor.gif","https://i.pinimg.com/originals/10/09/e8/1009e8432691a51d2bb903735bb3ffe1.gif","https://i.imgur.com/rMP03JO.gif","https://i.imgur.com/M2iFFuY.gif","https://media1.tenor.com/images/3d22991dc651df8a101413aa508e60b2/tenor.gif?itemid=14210742","https://media.tenor.com/images/783dfd9ad2e915ff19187ce61ff2a46d/tenor.gif","https://i.imgur.com/GYgCRau.gif","https://i.pinimg.com/originals/70/9a/4d/709a4d8ed9a4202c456b15e1728012f2.gif","https://media1.tenor.com/images/6b7cb32636a9cb6e22f86f0a87c80870/tenor.gif?itemid=17412395"]
 let item2 = ["gif/tohka.gif","gif/zero2.gif","https://i.imgur.com/rMP03JO.gif","https://i.imgur.com/M2iFFuY.gif","https://media1.tenor.com/images/3d22991dc651df8a101413aa508e60b2/tenor.gif?itemid=14210742","https://media.tenor.com/images/783dfd9ad2e915ff19187ce61ff2a46d/tenor.gif","https://i.imgur.com/GYgCRau.gif","gif/kaori.gif","https://media1.tenor.com/images/6b7cb32636a9cb6e22f86f0a87c80870/tenor.gif?itemid=17412395","gif/sagiri.gif","gif/toga.gif","gif/shiina.gif","gif/akeno.gif","gif/tsukasa.gif","https://media.tenor.com/images/6a40bc14843055d3b846b2841c8f5a63/tenor.gif","gif/asia.gif"]
var hasil_acak = item2[Math.floor(Math.random() * item.length)]
hero_name.innerHTML="";
Name.innerHTML="-"
anime.innerHTML="-"
cp.innerHTML="-"
hero.src=hasil_acak;
setInterval(function(){
const jam = new Date().getHours()
const menit = new Date().getMinutes()
const detik = new Date().getSeconds()
  let waktu = (jam+":"+menit+":"+detik)
},1000)





















// End Of File