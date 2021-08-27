function Normal(){
  let a=document.calc.txt.value;
if(a==""){
  i.placeholder='0'
}else{
  let b = a.split("÷").join("/");
  let c = b.split("×").join("*");
  let d = c.split("^").join("**");
  try {
    let result = eval(d);
    document.calc.txt.value=result;
  } catch (e) {
    if (e) {
      document.calc.txt.value="Error";
    }
  }
  i.style.fontSize='15px';
  setTimeout(function(){i.style.fontSize='15px'},500);
}}
// mematikan klik kanan
var message="Function Disabled";function clickIE() {if (document.all) {(message);return false;}}function clickNS(e) {if(document.layers||(document.getElementById&&!document.all)) {if (e.which==2||e.which==3) {(message);return false;}}}if (document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}document.oncontextmenu=new Function("return false")
let result = document.calc.txt;
result.addEventListener('click',function(){
    let a = document.calc.txt.value;
    if (a == "") {
      null
    } else {
    let text = ("Copied ✅")
    result.select();
    document.execCommand('copy');
    let isinya = result.value;
    result.value=text;
    setTimeout(()=>{result.value=isinya;result.style.fontSize="15px"},700)
    }
})
function remove(){
  let a=document.calc.txt.value;
  if(a==""){
    null
  }else{
  let isinya = result.value;
  let banyakChar = isinya.length;
  let kurangi = (banyakChar-1);
  let res = isinya.slice(0,kurangi);
  result.value=res;
  }
}
function preww(){
  let a=document.calc.txt.value;
if(a==""){
   i.placeholder="0";
}else{
  let b = a.split("÷").join("/")
  let c = b.split("×").join("*");
  let d = c.split("^").join("**");
  try {
    let result = eval(d);
    document.calc.prw.value=("= "+result);
  } catch (e) {
    if (e instanceof SyntaxError) {
        document.calc.prw.value="Error";
    }
}

}
}
setInterval(preww,100)
/*
let awal = 15;
setInterval(function(){
  let a=document.calc.txt.value;
  let b = a.length;
  let anu = Math.floor(b % 5);;
  if(anu==0){
    let akhir = awal--;
    console.log(awal)
    i.style.fontSize=`${akhir}px`;
  }
},700)
*/
function persen(){
  let a=document.calc.txt.value;
  if(a==""){
    null
  }else{
    document.calc.txt.value=(a/100);
  }
}
function bagi() {
  let a=document.calc.txt.value;
  if(a==""){
    null
  }else{
    document.calc.txt.value += " ÷ "
  }
}
function kali(){
  let a=document.calc.txt.value;
  if(a==""){
    null
  }else{
    document.calc.txt.value += " × "
  }
}
let counter = 0;
function kurung(){
  if(counter==1){
    counter--;
    document.calc.txt.value += ")";
  }else{
    counter++;
    document.calc.txt.value += "(";
  }
}