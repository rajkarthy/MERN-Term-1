// JSON
// localStorage
// Exercise #1
// Store an array in localStorage and access it
// Ex #2 
// Store the question in localStorage and access it
$(function(){
    // data in attributes
    // getAttributeData()
    // responses =[1,2,3,4,5]
    // $('.data-island').data('responses',responses)
    // console.log($('.data-island').data('responses'));
    getJSON('ques-db1.json')
    // getLocalData()
    // Exercise1();
    // Exercise2();
})
// get JSON
function getJSON(url){
    $.getJSON(url,function(json){        
        questions = json;
        console.log(questions)
        const keys = Object.keys(questions)
        console.log(keys);
        // [0 -> 1] * 1
        let randIndex = Math.floor(Math.random()*keys.length)
        // let randKey = 
        // console.log(randKey);
        console.log(questions[keys[randIndex]]);
        
    })
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("complete");
    });

}
// function getLocalData(){
//     if(typeof(Storage) !== 'undefined')
//     {
//         // console.log("Local Storage is available");
//         // if(!localStorage.getItem("name")){
//         //     console.log("Undefined name");
//         //     localStorage.setItem("name","Raj");
//         // }
//         // else{
//             // localStorage.setItem("current_question",10);
//             // localStorage.setItem("responses","1,2,3");

//             // let responses = localStorage.getItem("responses");
//             // responses.split(',').forEach(function(v){
//             //     console.log(v);
//             // });
//         // }
//     }
// }
function getAttributeData(){
    let name = $('.data-island').attr('data-name');
    // console.log(name['name']);
    let json = JSON.parse(name);
    console.log(json['name']);
}
// 1. Cookie vs localStorage
// Cookie - piggybacks with every request
// LocalStorage
// Not secure
// 5MB Limit
// Sequential operation
// 2. JSON 

// Ex #1
function Exercise1()
{
    let responses = [1,2,3,4];
    localStorage.setItem('responses',JSON.stringify(responses));
    responses = localStorage.getItem('responses');
    console.log(JSON.parse(responses));
}
// Ex #2
let qdb = {
    "q1": {
        "question": "Which one is correct team name in NBA?",
        "options": [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        "answer": "Huston Rocket"
    },
    "q2": {
        "question": "Which one is WRONG team name in NBA?",
        "options": [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
        ],
        "answer": "Huston Rocket"
    }

}
function Exercise2()
{
    localStorage.setItem('questions', JSON.stringify(qdb));
    responses = localStorage.getItem('questions');
    console.log(JSON.parse(responses));
}










// Cookie vs localStorage
// Not secure
// 5MB Limit
// Sequential operation
// function getLocalData(){
//     if (typeof (Storage) !== "undefined") {
//         // Code for localStorage
//         console.log("Local Storage present")
//     } else {
//         // No web storage Support.
//     }
// }




















// function getJSON() {
//     let api = "ques-db.json";
//     let questions = ''
//     $.getJSON(api, function (json) {
//         questions = json
//         console.log(questions)
//         const keys = Object.keys(questions)

//         // Generate random index based on number of keys
//         const randIndex = Math.floor(Math.random() * keys.length)

//         // Select a key from the array of keys using the random index
//         const randKey = keys[randIndex]

//         // Use the key to get the corresponding name from the "names" object
//         const name = questions[randKey]
//         console.log(name)
//     })

// }