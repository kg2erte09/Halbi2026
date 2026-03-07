// Membuka amplop
function openInvite() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("music").play();
}

// Countdown
const target = new Date("April 11, 2026 09:00:00").getTime();
function updateClock() {
    let now = new Date().getTime();
    let distance = target - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    flip("day", days);
    flip("hour", hours);
    flip("minute", minutes);
}

function flip(id, value) {
    let el = document.getElementById(id);
    if (el.innerText != value) {
        el.classList.add("flip");
        setTimeout(() => {
            el.innerText = value;
            el.classList.remove("flip");
        }, 300);
    }
}
setInterval(updateClock, 1000);

// Zoom foto
function zoom(img) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Nama dari URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if (nama) {
    const guestEl = document.getElementById("guest");
    if(guestEl) guestEl.innerHTML = "Kepada Yth. " + nama;
}

// Submit RSVP ke Google Apps Script Web App
document.getElementById('rsvpForm').addEventListener('submit', function(e){
  e.preventDefault(); // cegah reload

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    const msg = document.getElementById('formMessage');
    msg.innerText = "Terima kasih! Konfirmasi Anda berhasil dikirim.";
    msg.style.color = "#d4af37";
    form.reset();
    setTimeout(() => { msg.innerText = ""; }, 5000);
  })
  .catch(error => {
    const msg = document.getElementById('formMessage');
    msg.innerText = "Terjadi kesalahan, silakan coba lagi.";
    msg.style.color = "red";
    console.error(error);
  });
});
