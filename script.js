let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.openweathermap.org/geo/1.0/direct?q=Helsingborg&limit=5&appid=1dd63c8198d8911de01c8b5aca6880bc', true); 
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  let response = xhr.response;
  let longitude = response[0].lon;
  let latitude = response[0].lat;
  let name = response[0].name;
  let newObject = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=1dd63c8198d8911de01c8b5aca6880bc&units=metric';
  
  let object1 = new XMLHttpRequest();
  object1.open('GET', newObject , true); 
  object1.responseType = 'json';
  object1.send();

  console.log(object1);
  
  object1.onload = function() {
  let response = object1.response;
  let temp = response.main.temp;
  let weather = response.weather[0].main;
  console.log(temp , weather)

document.getElementById("row1").innerHTML = "The local weather in" + " " + name + " " + ", Sweden.";

document.getElementById("row2").innerHTML = temp + " C " + weather

}
};