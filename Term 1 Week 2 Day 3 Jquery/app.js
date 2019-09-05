// Traversal & Manipulation
// Event handlers
// AJAX (External Requests)

// document.getElementsByClassName("weather-app")
// Id
// let weatherApp = $('#weather-app')
// console.log(weatherApp.text())
// let cityWeather = $('#weather-app>.city-weather')
// console.log(cityWeather.html())
// cityWeather.html('Chennai');
// console.log(cityWeather.text())

// Class
// $('.weather-app') 
// Event handlers
$(function(){
    $('#weather-app').on('click','.weather-app .city-search',searchCity);
    addNewSearch();
})
// console.log("Not Loaded");
function addNewSearch(){
    $('#weather-app').append(`<button class='city-search'>
                                New Search</button>`)
}
function searchCity(){
    let newCityName = $('#weather-app .city-name-input').val()
    console.log(newCityName);
}

// AJAX
// openweather.org?cityname=Chennai
// $.ajax({
//     url:'openweather.org',
//     dataType:'json',
//     data:{apikey:"myapikeyiszero",cityname:'Chennai'},
//     method:'post',
//     success:function(json){
//         console.log(json)
//     },
//     error:function(){
//         console.log("Network error");
//     }
// })
// $.get('openweather.org/sample.json',function(t){
//     let parseJson =  JSON.parse(t);
// })
// get
// post
