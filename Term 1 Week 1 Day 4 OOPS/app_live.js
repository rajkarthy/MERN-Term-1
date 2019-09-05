// Step 1
// Literals vs Object
// Step 2 ES5
// function Human(name, age) {
// Step 3 Prototype
// Human.prototype.getAge = function () {
// Step 4 Inheritence
// function SuperHuman(name, age, power) {
// SuperHuman.prototype = Object.create(Human.prototype);


// const name = "Sachin";
// console.log(name.length)

// const name2 = new String("Sachin");
// console.log(name2)

//  ES5
function Human(name,age = 30){
    this.name = name;
    this.age = age;
    // console.log("Object created..");
    this.getName = function(){
        return this.name;
    }
}

Human.prototype.getAge = function(){
    return this.age;
}
Human.prototype.color = "Red";
Human.prototype.findings = ["Computer","Calculus"];

const turing = new Human("Turing",32);
// const church = new Human("Church");
// church.color = "Blue";
// // turing.findings.push("Automata");

// console.log(church);
// console.log(turing);

// SuperHuman
function SuperHuman(name,age,power){
    this.power = power;
    Human.call(this,name,age);
}   
// console.log(turing);
SuperHuman.prototype = Human.prototype;
const ironman = new SuperHuman("Ironman",100,"Fly");
console.log(ironman);
console.log(ironman.getAge());


// ES6
// class Human{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getName(){
//         return this.name;
//     }
// }
// const turing = new Human("Turing", 32);
// console.log(turing);


// class Alien {
//     constructor(name, age ,power) {
//         this.name = "Alien" + name;
//         this.age = age + 100;
//         this.power = power;
//     }
//     getName() {
//         return this.name;
//     }
// }

// class SuperHuman {
//     constructor(name,age,power){
//         this.name = name;
//         this.age = age;
//         this.power = power;
//     }
// }
// SuperHuman.prototype.constructor = Alien.prototype.constructor;
// const ironman = new SuperHuman("Ironman",100,"Flying");
// console.log(ironman);





// church.color ="pink";
// console.log(turing.color);
// console.log(church.color);
























// Step 1
// Literals vs Object
// const name1 = "Ironman"
// console.log(typeof name1)

// const name2 = new String("Ironman")
// console.log(typeof name2) 

// Step 2 ES5
// function Human(name, age) {
//     this.name = name
//     this.age = age
//     this.getName = function () {
//         return this.name
//     }
// }
// const turing = new Human("Turing", 32)
// console.log(turing.getName())
// // console.log(turing)

// // Step 3 Prototype
// Human.prototype.getAge = function () {
//     return this.age;
// }
// console.log(turing.getAge())

// // Step 4 Inheritence
// function SuperHuman(name, age, power) {
//     this.power = power;
//     Human.call(this, name, age);
// }
// SuperHuman.prototype = Object.create(Human.prototype);
// const ironman = new SuperHuman("Ironman", 30, "Fly")
// console.log(ironman.getAge())