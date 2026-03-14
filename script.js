function openInvite(){

document.getElementById("opening").style.display="none";
document.getElementById("content").style.display="block";

document.getElementById("music").play();

}

/* COUNTDOWN */

const target = new Date("April 11, 2026 09:00:00").getTime();

function updateClock(){

let now = new Date().getTime();
let distance = target - now;

let days = Math.floor(distance/(1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("day").innerText=days;
document.getElementById("hour").innerText=hours;
document.getElementById("minute").innerText=minutes;

}

setInterval(updateClock,1000);

/* NAMA TAMU */

const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

if(nama){
document.getElementById("guest").innerHTML="Kepada Yth. "+nama;
}

/* RSVP SUBMIT */

document.getElementById("rsvpForm").addEventListener("submit",function(e){

e.preventDefault();

const form=this;
const data=new FormData(form);

fetch(form.action,{
method:"POST",
body:data
})
.then(res=>{

document.getElementById("formMessage").innerText="Terima kasih! Konfirmasi Anda berhasil dikirim.";
form.reset();

})
.catch(err=>{

document.getElementById("formMessage").innerText="Terjadi kesalahan. Silakan coba lagi.";

});

});
