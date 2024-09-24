let adiniz = prompt('Lutfen Adinizi Giriniz.');
let isim = document.querySelector('#myName');
isim.innerHTML = `${adiniz}`;

let myClock = document.querySelector('#myClock');

function showTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours().toString().padStart(2, '0');
  let minutes = currentDate.getMinutes().toString().padStart(2, '0');
  let seconds = currentDate.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function getDayName() {
  const days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ];
  let d = new Date();
  return days[d.getDay()];
}

function updateClock() {
  myClock.innerHTML = `${showTime()} ${getDayName()}`;
}

setInterval(updateClock, 1000); // Update clock every second
