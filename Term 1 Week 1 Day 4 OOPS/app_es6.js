// Step 1
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
            return this.name;
        };
    }
    getAge() {
        return this.age;
    }
}
const turing = new Human("Turing",32)
console.log(turing.getName())
console.log(turing.getAge())

// Step 4 Inheritence
class SuperHuman extends Human {
    constructor(name, age, power) {                
        super(name, age);
        this.power = power;        
    }
}
const ironman = new SuperHuman("Ironman",30,"Fly")
console.log(ironman.getAge())