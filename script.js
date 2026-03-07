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

let target=new Date("April 11, 2026 09:00:00").getTime();

setInterval(function(){

let now=new Date().getTime();

let distance=target-now;

let d=Math.floor(distance/(1000*60*60*24));
let h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((distance%(1000*60*60))/(1000*60));
let s=Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML=

d+" Hari "+h+" Jam "+m+" Menit "+s+" Detik";

},1000);

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