// Copyright 2024 ninad
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* 1. Classes and Objects
Q1: Create a class called Person with properties for name, age, and gender. Add a method called greet() that returns a greeting message using the person's name.

Q2: Create a class Car with properties brand, model, and year. Add a method called start() that returns a message indicating the car has started.*/
class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    greet(){
        return "Hello ,"+this.name;
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

}
const person1= new Person("Jhon",21,"M");
console.log(person1.greet());

class Car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    start(){
        console.log("The "+this.model+" has started");
    }
}
const tata=new Car("tata","punch",2022);
tata.start();

    /* 2. Inheritance
    Q3: Create a class Animal with a method speak() that logs a generic message. Then create a subclass Dog that overrides the speak() method to log "Woof! Woof!".

    Q4: Create a base class Employee with properties name and salary, and a method getDetails() that returns the employee's details. Create a subclass Manager that
    adds a property department and overrides getDetails() to include the department information.*/

    // class Animal{
    //     speak(){
    //         return "Spoke";
    //     }
    // }

    // class Dog extends Animal{
    //     speak(){
    //         return "Woof!Woof!";
    //     }
    // }

    class Employee{
        constructor(name,salary){
            this.name=name;
            this.salary=salary;
        }
        getDetails(){
            return this.name+" "+this.salary;
        }
    }
    class Manager extends Employee{
        constructor(name,salary,department){
            super(name,salary)
            this.department=department
        }

        getDetails(){
            return this.name+" "+this.salary+" "+this.department;

        }
    }
// For Q4
const manager = new Manager("John Doe", 90000, "Sales");
console.log(manager.getDetails());  // Output: John Doe 90000 Sales

// const myDog = new Dog();
// console.log(myDog.speak());  // Output: Woof! Woof!


const person2 = new Person();
person1.getPrototype();  // Logs the prototype object of person1

class Animal{
    constructor(color,energy=100){
        this.color=color;
        this.energy=energy;

    }
    isActive(){
        if(this.energy==0){
            sleep();
        }
        else{
            console.log(`${this} is active`);
            this.energy-=10;
        }
    }
    sleep(){
        console.log("Sleeping");
    }
    getColor(){
        console.log(this.color);
    }
}
class Cat extends Animal{
    constructor(color,energy,sound,canJumpHigh,canClimbTrees){
        super(color,energy=100);
        this.canClimbTrees=canClimbTrees;
        this.sound=sound;
        this.canJumpHigh=canJumpHigh;
    }
    makeSound(){
        console.log(`The cat says ${this.sound}`);
    }
}
class Bird extends Animal{
    constructor(color,energy,sound,canFly){
        super(color,energy);
        this.sound=sound;
        this.canFly=canFly;
    }
}

class HouseCat extends Cat{
    constructor(color,energy,houseCatSound,canJumpHigh,canClimbTrees){
        super(canClimbTrees,canJumpHigh,color,energy);
        this.houseCatSound=houseCatSound;
    }
    makeSound(){
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat{
    constructor(color,energy,tigerSound,canJumpHigh,canClimbTrees){
        super(canClimbTrees,canJumpHigh,color,energy);
        this.tigerSound=tigerSound;
    }
    makeSound(){
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Parrot extends Bird{
    constructor(color,energy,sound,canFly,canTalk){
        super(color,energy,sound,canFly);
        this.canTalk=canTalk;
    }
    makeSound(){
        if(this.makeSound&&this.canTalk){
            console.log("I am a stupid parrot i can talk");
        }
    }
}
const parrot1=new Parrot("green",100,"CHIP",true,true);
parrot1.makeSound();