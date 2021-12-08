function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let apiKey = "efb9685e5e87bbfea508cb52e9192f88";
let apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${apikey}&units=metric';
axios.get(apiUrl).then(displayTemperture)


 //apikey=efb9685e5e87bbfea508cb52e9192f88
 //axios link=<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>