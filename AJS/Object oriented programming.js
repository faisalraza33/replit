// Construction Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    console.log("this", this);
}

// prototype inheritence
// and this will on allocate memory once and reference to every object we created
// Dynamicall scoped function (we can not use arrow function)
Elf.prototype.attack = function () {
    return `${this.name} attack with ${this.weapon}`
}

Elf.prototype.build = function () {
    // We can fix the problem by using different ways
    // 1. use const self = this;
    // 2. user buidling.bind(this);
    const self = this;

    function buidling() {
        return self.name + " building a house"; // with return undefined
    }
    return buidling();
}

const raza = new Elf('Raza', 'stone');
const maza = new Elf('Maza', 'fire');
console.log(raza.__proto__, Elf.prototype) // only contructor function gets prototype 
console.log(raza.attack());
console.log(raza.build());
console.log(maza.attack());


// ES6 Class
// javascript get the class keyword
// we use instanceOf for object 
class Elf1 {
    // this function will execute every time with NEW keyword
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    // this will only be created once and will be efficient
    attack() {
        return `${this.name} will attack with ${this.weapon}`
    }
}

const razaa = new Elf1('Razaa', 'stone');
console.log(razaa.attack())
console.log(razaa instanceof Elf1)

// We can do the same we did prevous with
// Object.create() // is called pure protype programming 

// new keyword binding
function ElfWithNew(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// implicit binding 
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name);
    }
}

// explicit binding 
const person2 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

person2.hi();

// arrow function
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        var inner = () => {
            console.log('hi' + this.name);
        }
        return inner();
    }
}

person3.hi()