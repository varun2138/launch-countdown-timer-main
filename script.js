let countDownDate = new Date(" january 1, 2024 00:00:00").getTime();
let x = setInterval(
  (Time = () => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);

    let getDay = document.querySelector(".days");
    let getHour = document.querySelector(".hours");
    let getMin = document.querySelector(".minutes");
    let getSec = document.querySelector(".seconds");

    if (distance < 0) {
      clearInterval();
      getDay.innerHTML = "00";
      getHour.innerHTML = "00";
      getMin.innerHTML = "00";
      getSec.innerHTML = "00";
    }

    //  for days
    if (day < 10) {
      getDay.innerHTML = `0${day}`;
    } else {
      getDay.innerHTML = day;
    }

    //  for hours
    if (hour < 10) {
      getHour.innerHTML = `0${hour}`;
    } else {
      getHour.innerHTML = hour;
    }

    //  for minutes
    if (min < 10) {
      getMin.innerHTML = `0${min}`;
    } else {
      getMin.innerHTML = min;
    }

    //  for seconds
    if (sec < 10) {
      getSec.innerHTML = `0${sec}`;
    } else {
      getSec.innerHTML = sec;
    }
  }),
  1000
);
