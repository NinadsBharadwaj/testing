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

//forEach
const fruits=["Apple","Kiwi","Orange"];
fruits.forEach(function(fruit,index){
    console.log(index,fruit)
})

//filter
const numbers=[1,2,3,4,5,6];
numbers.filter(function(number){
    if (number>3){
        console.log(number);
    }
})

//map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//set
setNumbers=[1,2,2,3,3,4,5,6,6,6,6,7]
uniqueNumber=new Set(setNumbers)
console.log(uniqueNumber)


//Spread Operator
top7=["A","B","C","D","E","F","G"];
// top7.forEach(function visitedPlaces(place){
//     console.log("Visited ",place)
// })
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Merges arr1 and arr2
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
