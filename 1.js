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
console.log("Hello world");
const decreasebtn=document.getElementById("decreseButton");
const resetbtn=document.getElementById("resetButton");
const increasebtn=document.getElementById("increseButton");
const countLabel=document.getElementById("countLabel");
let count=0;

increasebtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}

decreasebtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}

resetbtn.onclick=function(){
    countLabel.textContent=0;
}
