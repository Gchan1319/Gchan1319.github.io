function tx() {
  var i = document.getElementById('i').value;
  i.toString();
  // penghapusan
  var a = i.replace(/×/i,"*");
  var b = a.replace(/÷/i,"/");
  var c = b.replace(/x/i,"*");
  let r = eval(c);
  result.value=(r);
}

result.addEventListener('click',function(){
    let text = ("Berhasil disalin !")
    result.select();
    document.execCommand('copy');
    let isinya = result.value;
    result.value=text;
    setTimeout(() => {tx()},700);
})

function hb(){
  result.value="text dibersihkan !";
  setTimeout(function(){result.value=""},800)
}
function his(){
  i.value="";
  i.placeholder="input dibersihkan !";
  setTimeout(function(){i.placeholder="input your text .."},800)
}
/*
Berapa hasil dari *28226753514 × 960023169676*?

Timeout: 30.00 detik
Bonus Jawaban Benar: 35000 XP 
*/

setInterval(function(){result.style.backgroundColor="#FF6D6D";i.style.backgroundColor="#FF6D6D"},701)
setInterval(function(){result.style.backgroundColor="#13C1E4";i.style.backgroundColor="#13C1E4"},800)
setInterval(function(){result.style.backgroundColor="#FEFF02";i.style.backgroundColor="#FEFF02"},903)