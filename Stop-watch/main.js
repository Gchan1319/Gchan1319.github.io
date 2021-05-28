// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = (time / 3600000)*(1); // kecepatan waktu hehe
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);
  
  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);
  
  let formattedhh = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedhh}:${formattedMM}:${formattedSS}:${formattedMS}`;
}
// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}
function pwaktu(i){
let waktu = new Date;
var jam = waktu.getHours().toString()
var menit = waktu.getMinutes().toString()
var detik = waktu.getSeconds().toString()
if(jam.length<2){var jam = ("0"+jam)}
if(menit.length<2){var menit = ("0"+menit)}
if(detik.length<2){var detik = ("0"+detik)}
  i.innerHTML=(jam+":"+menit+":"+detik)
}
// Create "start", "pause" and "reset" function
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
  // waktu mulai
  pwaktu(t1)
  t2.innerHTML="00:00:00"
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
  // waktu stop
  pwaktu(t2)
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
  t1.innerHTML="00:00:00";
  t2.innerHTML="00:00:00";
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);