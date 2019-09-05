const fruits = ["Apple","Banana","Mango",12,3,4];
const cityWeather = [
    { name: "Chennai", weather: [20, 30, 40] } ,
    { name: "Bangalore", weather: [41, 22, 32] ,
        updatedTime: Date(),
        age:{
            today:30,
            tomorrow:50
        } 
    }
];
console.log(cityWeather[1].weather[2]);


