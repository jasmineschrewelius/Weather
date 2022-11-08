function loadWheaterFromServer(){
    <script src="https://api.openweathermap.org/data/2.5/weather?lat={56.0467}&lon={12.6944}&appid={1dd63c8198d8911de01c8b5aca6880bc}"></script>
    let wheater = JSON.parse(response);
    console.log(wheater);
}