function getCurrentDate() {
  const date = new Date();
  const dateHtml = document.querySelector('.header__date');

  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}.${month}.${year}`;
  dateHtml.innerHTML = currentDate;
}
