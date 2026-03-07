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

let days = Math.floor(distance / (1000*60*60*24));
let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

flip("day",days);
flip("hour",hours);
flip("minute",minutes);

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

const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

if(nama){
document.getElementById("guest").innerHTML = "Kepada Yth. " + nama;
}
// Tangani submit form
document.getElementById('rsvpForm').addEventListener('submit', function(e){
  e.preventDefault(); // cegah reload halaman

  // ambil nilai
  const nama = this.nama.value;
  const kehadiran = this.kehadiran.value;
  const jumlah = this.jumlah.value;
  const pesan = this.pesan.value;

  // contoh: kirim ke Formsubmit (ganti email Anda)
  const formData = new FormData();
  formData.append('Nama', nama);
  formData.append('Kehadiran', kehadiran);
  formData.append('Jumlah', jumlah);
  formData.append('Pesan', pesan);

  fetch('https://formsubmit.co/emailanda@gmail.com', {
    method:'POST',
    body:formData
  })
  .then(response=>{
    document.getElementById('formMessage').innerText = "Terima kasih! Konfirmasi Anda berhasil dikirim.";
    this.reset();
  })
  .catch(error=>{
    document.getElementById('formMessage').innerText = "Terjadi kesalahan. Silakan coba lagi.";
    console.error(error);
  });
});

// Tangani submit form
document.getElementById('rsvpForm').addEventListener('submit', function(e){
  e.preventDefault(); // cegah reload halaman

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Tampilkan notifikasi terima kasih
    const msg = document.getElementById('formMessage');
    msg.innerText = "Terima kasih! Konfirmasi Anda berhasil dikirim.";
    msg.classList.add('show');

    // Reset form setelah submit
    form.reset();

    // Hilangkan notifikasi setelah 5 detik
    setTimeout(() => { msg.classList.remove('show'); msg.innerText = ""; }, 5000);

  })
  .catch(error => {
    const msg = document.getElementById('formMessage');
    msg.innerText = "Terjadi kesalahan. Silakan coba lagi.";
    msg.classList.add('show');
    console.error(error);
  });
});

function doGet(e){
  return HtmlService.createHtmlOutput("Web App aktif. Formulir siap menerima submit.");
}

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1"); // ganti nama sheet

  // Ambil data dari form
  var nama = e.parameter.Nama;
  var kehadiran = e.parameter.Kehadiran;
  var jumlah = e.parameter.Jumlah;

  // Timestamp
  var timestamp = new Date();

  // Tambahkan ke Sheet
  sheet.appendRow([timestamp, nama, kehadiran, jumlah]);

  // Balikkan response
  return ContentService.createTextOutput("Terima kasih! Konfirmasi Anda berhasil dikirim.");
}
