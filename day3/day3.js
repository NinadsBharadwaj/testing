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

try{
    console.log(a+b)
}
catch(err){
    console.log(err);
}
console.log("Successfull")

function Person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eye=eye;
    this.nationality="English";
    this.fullName=function(){
        return this.firstName+this.lastName;
    }
}
//add method to a constructor using prototype
Person.prototype.changeName = function (name) {
    this.lastName = name;
  }
const myMother = new Person("Sally", "Rally", 48, "green");
myMother.changeName="Doe"
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");
const myFather = new Person("John", "Doe", 50, "blue");
myFather.nationality="Indian";

/*
Objective:
Create a constructor function called Car that will be used to create car objects.
Each car should have properties like make, model, year, and color.
Add a method to the Car prototype that returns the car's details as a formatted string
*/
function car(make,model,year,color){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.getDetails=function(){
        var string2="Make:"+this.make+",Model:"+this.model+"Year:"+this.year+"Color:"+this.color;
        return string2
    }
}

const toyota=new car("Etios","Liva",2012,"red");
const tata=new car("Punch","XM",2022,"White");
const mahindra=new car("XUV700","AX11",2022,"Blue");
console.log(tata.getDetails());
console.log(toyota.getDetails());
console.log(mahindra.getDetails());

/*
Objective:
Create a constructor function called Book to represent a book.
Each book should have properties like title, author, year, and genre.
Add a method to the Book prototype that returns the book's summary as a formatted string.
Add another method to the Book prototype to determine how old the book is based on the current year.
Steps:
Create the Book Constructor Function:

The constructor should accept parameters for title, author, year, and genre.
Use these parameters to initialize the properties of the book.
Add a Method to the Book Prototype:

Create a method called getSummary that returns a string in the format: "Title: [title], Author: [author], Year: [year], Genre: [genre]".
Add Another Method to the Book Prototype:

Create a method called getBookAge that returns the age of the book by subtracting the publication year from the current year.
Create Multiple Book Objects:

Create at least three different book objects using the Book constructor.
Display the Book Summaries and Ages:

Call the getSummary and getBookAge methods on each book object and log the results to the console.
*/

function Book(title,author,year,genre){
    this.title=title;
    this.author=author;
    this.year=year;
    this.genre=genre;
    this.getSummary=function(){
        var returnString="Title:"+this.title+",Author:"+this.author+",Year:"+this.year+",Genre:"+this.genre;
        return returnString
    }
}
Book.prototype.getBookAge=function(){
    let currentYear=2024;
    difference=currentYear-this.year;
    return difference;
}

const book1=new Book("Harry Potter and the Philosopher's Stone","J. K. Rowling",1997,"Novel");
const book2=new Book("Harry Potter and the Chamber of Secrets","J. K. Rowling",1998,"Novel");
const book3=new Book("Harry Potter and the Prisoner of Azkaban","J. K. Rowling",1999,"Novel");
const book4=new Book("The Great Gatsby","F. Scott Fitzgerald",1925,"Fiction");
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());
console.log(book4.getSummary());
console.log(book1.getBookAge());

function squareFunction() {
    // Get the value from the input field and convert it to a number
    let number = parseFloat(document.getElementById("numberId").value);
    // Calculate the square of the number
    let squareNumber = number * number;
    // Display the result
    document.getElementById("result").innerHTML = "Result is: " + squareNumber;
}
