// console.log("Hello World");
// window.onload = exampleFunction;
// exampleFast();
// function exampleFunction()
// {
//     console.log("Hello World");
// }

// function exampleFast() {
//     console.log("Hello Fast World");
// }

const fruits = [12,3,4];
const cityWeather = [
    { name: "Chennai", good:2, weather: [20, 30, 40] },
    { name: "Bangalore", good:3, weather: [41, 22, 32] ,updatedTime: Date() },
];

// console.log(cityWeather[1].weather[2]);

for (let i = 0; i < cityWeather.length; i++) {
   if (cityWeather[i].name === "Chennai")
       console.log(cityWeather[i].weather);
}

cityWeather.forEach(function(v){
    if( v.name === "Chennai")
        console.log(v.weather);
});

let tempCity = cityWeather
                    .filter(function (v) {
                        if (v.good >= 1)
                            return true;
                    })
                    .map(function(v){
                        return v.good*v.good;
                    })
document.getElementById('example').innerHTML = tempCity

// let goodCities = cityWeather
//                     .map(function (v) {
//                         return "Good city is "+(v.name);
//                     });
                  
// console.log(goodCities);