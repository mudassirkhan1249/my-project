let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Format hours, minutes, and seconds to always be two digits
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

updateClock(); // Initial call to set the clock immediately
setInterval(updateClock, 1000); // Update the clock every second     
