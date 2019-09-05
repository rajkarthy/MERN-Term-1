// Step 1
// Literals vs Object
// const name1 = "Ironman"
// console.log(typeof name1)

// const name2 = new String("Ironman")
// console.log(typeof name2) 

// Step 2 ES5
function Human(name,age){
    this.name = name
    this.age = age
    this.getName = function(){
        return this.name
    }
}
const turing = new Human("Turing",32)
console.log(turing.getName())
// console.log(turing)

// Step 3 Prototype
Human.prototype.getAge = function () {
    return this.age;
}
console.log(turing.getAge())

// Step 4 Inheritence
function SuperHuman(name,age,power){
    this.power = power;
    Human.call(this,name,age);
}
SuperHuman.prototype = Object.create(Human.prototype);
const ironman = new SuperHuman("Ironman",30,"Fly")
console.log(ironman.getAge())