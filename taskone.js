const daysElement = document.getElementById("day");
const timeElement = document.getElementById("time");

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const myTaskOne = () => {
  const day = days[date.getDay()];
  const timeMilliseconds = Date.now()

  daysElement.innerHTML = day;
  timeElement.innerHTML = timeMilliseconds;
};

myTaskOne();

setInterval(myTaskOne, 1000);
