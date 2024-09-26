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


const car={
    speed:200,
    color:"red",
}
//TO iterate over objects we use special methods like object.values(),object.keys(),object.entries()
console.log(Object.keys(car));//['speed', 'color']
console.log(Object.values(car));//[200, 'red'] 
console.log(Object.entries(car));//[Array(2), Array(2)]


//for-of vs for-in loop
const sportCar=new Object(car);
sportCar.speed=300;
sportCar.milage="Low";
for(prop in sportCar){
    console.log(prop);
}
for(const variable of Object.values(sportCar)){
    console.log(variable);
}
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (const value of Object.values(dairy)){
        console.log(value);
    }
}
logDairy();
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const birdValue of Object.keys(bird)) {
        console.log(`${birdValue}:${bird[birdValue]}`);
    }
}
birdCan();

animalCan();
function animalCan() {
    for (prop in bird) {
       console.log(`${prop}: ${bird[prop]}`);
    }
}
animalCan();


