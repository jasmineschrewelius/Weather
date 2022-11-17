//Hämta longitud och latitud från API
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.openweathermap.org/geo/1.0/direct?q=Helsingborg&limit=5&appid=1dd63c8198d8911de01c8b5aca6880bc', true); 
xhr.responseType = 'json';
xhr.send();

// Skapa variabler , spara  ner long, lat och stad
xhr.onload = function() {
  let response = xhr.response;
  let longitude = response[0].lon;
  let latitude = response[0].lat;
  let name = response[0].name;

  // Skapa en ny URL med hjälp av koordinaterna
  let newURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=1dd63c8198d8911de01c8b5aca6880bc&units=metric';
  
  // Hämta temperatur och vädret från API
  let weather1 = new XMLHttpRequest();
  weather1.open('GET', newURL , true); 
  weather1.responseType = 'json';
  weather1.send();
  
  // Skapa variabler , spara  ner temperatur och vädret
  weather1.onload = function() {
  let response = weather1.response;
  let temp = response.main.temp;
  let weather = response.weather[0].main;

// Skriv ut informationen på skärm för användaren
document.getElementById("row1").innerHTML = "The local weather in" + " " + name + " " + ", Sweden.";

document.getElementById("row2").innerHTML = temp + " C " + weather

}
};