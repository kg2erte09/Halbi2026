// Buka undangan
function openInvite() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("music")?.play();
}

// Countdown flip clock
const target = new Date("April 11, 2026 09:00:00").getTime();

function updateClock() {
    const now = new Date().getTime();
    const distance = target - now;
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    flip("day", days);
    flip("hour", hours);
    flip("minute", minutes);
}

function flip(id, value) {
    const el = document.getElementById(id);
    if (el && el.innerText != value) {
        el.classList.add("flip");
        setTimeout(() => {
            el.innerText = value;
            el.classList.remove("flip");
        }, 300);
    }
}
setInterval(updateClock, 1000);

// Zoom galeri
function zoom(img) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Ambil nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const namaTamu = params.get("to");
if (namaTamu) {
    const guestEl = document.getElementById("guest");
    if (guestEl) guestEl.innerHTML = "Kepada Yth. " + namaTamu;
}

// Submit form ke Web App Google Sheets
document.getElementById('rsvpForm').addEventListener('submit', function(e){
    e.preventDefault(); // cegah reload
    const form = this;
    const formMessage = document.getElementById("formMessage");
    const data = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: data
    })
    .then(response => {
        formMessage.innerText = "Terima kasih! Konfirmasi Anda telah diterima.";
        formMessage.style.color = "#d4af37";
        form.reset();
        // Hapus notifikasi setelah 5 detik
        setTimeout(() => { formMessage.innerText = ""; }, 5000);
    })
    .catch(error => {
        formMessage.innerText = "Terjadi kesalahan, silakan coba lagi.";
        formMessage.style.color = "red";
        console.error(error);
    });
});
