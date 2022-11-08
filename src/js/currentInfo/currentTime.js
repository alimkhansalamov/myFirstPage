// const time = new Date();
// const timeHtml = document.querySelector('.header__time');
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();
// let fullTime = hour + ':' + minute + ':' + second;
// function addZero(i) {
//   if (minute < 10) {
//     minute = '0' + i;
//   }
//   return minute;
// }

// console.log((fullTime.innerHTML = time));

function realTimeClock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = ('0' + hours).slice(-2);
  minutes = ('0' + minutes).slice(-2);
  seconds = ('0' + seconds).slice(-2);

  document.querySelector('.header__time').innerHTML = hours + ':' + minutes + ':' + seconds;

  let t = setTimeout(realTimeClock, 500);
}
