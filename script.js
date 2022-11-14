let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.openweathermap.org/geo/1.0/direct?q=Helsingborg&limit=5&appid=1dd63c8198d8911de01c8b5aca6880bc', true); 
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  let response = xhr.response;
  let longitude = response[0].lon;
  let latitude = response[0].lat;
  let name = response[0].name;
  console.log(name, latitude, longitude)
};

/*
let Http = new XMLHttpRequest();
Http.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid=1dd63c8198d8911de01c8b5aca6880bc&units=metric', true); 
Http.responseType = 'json';
Http.send();
*/