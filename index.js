let hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let time = new Date();
  let h = time.getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  hourEl.innerText = new Date().getHours();

  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl, (innerText = ampm);
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
