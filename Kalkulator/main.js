function Normal(){let a=document.calc.txt.value;if(a==""){i.placeholder='Masukan input terlebih dahulu'}else{document.calc.txt.value=eval(calc.txt.value);i.style.fontSize='20px';setTimeout(function(){i.style.fontSize='10px'},500);}}
// mematikan klik kanan
var message="Function Disabled";function clickIE() {if (document.all) {(message);return false;}}function clickNS(e) {if(document.layers||(document.getElementById&&!document.all)) {if (e.which==2||e.which==3) {(message);return false;}}}if (document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}document.oncontextmenu=new Function("return false")