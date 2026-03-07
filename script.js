function openInvite(){

document.getElementById("opening").style.display="none";
document.getElementById("content").style.display="block";

document.getElementById("music").play();

}

/* MUSIC */

function toggleMusic(){

let music=document.getElementById("music");

if(music.paused){

music.play();

}else{

music.pause();

}

}

/* COUNTDOWN */

const target = new Date("April 11, 2026 09:00:00").getTime();

function updateClock(){

let now = new Date().getTime();

let distance = target - now;

let days = Math.floor(distance / (1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
let seconds = Math.floor((distance%(1000*60))/1000);

flip("day",days);
flip("hour",hours);
flip("minute",minutes);
flip("second",seconds);

}

function flip(id,value){

let el=document.getElementById(id);

if(el.innerText!=value){

el.classList.add("flip");

setTimeout(()=>{
el.innerText=value;
el.classList.remove("flip");
},300);

}

}

setInterval(updateClock,1000);

/* ZOOM FOTO */

function zoom(img){

document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=img.src;

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

/* NAMA TAMU DARI LINK */

const params=new URLSearchParams(window.location.search);

const nama=params.get("to");

if(nama){

document.getElementById("guest").innerHTML="Kepada Yth. "+nama;


}

