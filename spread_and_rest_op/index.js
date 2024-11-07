//Destructing
//destructuring is a convenient way of extracting values from arrays or properties from objects into distinct variables.
const fruits=['apple','banana','orange'];

const [firstFruit,secondFruit,thirdFruit]=fruits;

console.log(firstFruit,secondFruit);

// we can also skip elements

const animals=['dog','cat','rabbit'];
const [pet1,,pet2]=animals;
console.log(pet1,pet2);

//we can also assign default values to it

const cars=['Maruti','Tata','Mahindra'];
const [car1,car2,car3,car4="default"]=cars;
console.log(car1,car4);

// Object destructuring
const person = {
    name: 'John',
    age: 32,
    city: 'New York',
    country: 'USA'
  };

const { name, age } = person;

  // Object destructuring with alias
const { name: firstName, age: years } = person;
console.log(firstName,years);

//spread operator
const fruits1=['apple','banana','oranges'];
const berries=['blueberry','strawberry'];
const fruitandberries=[...fruits1, ...berries];
console.log(fruitandberries);

//spread operator add stuff
const person2 = {
    name: 'jhon' ,
    age: 23,
}
const jhonAddress = {...person2,city: 'New York',country:'Usa',};
console.log(jhonAddress);//Object { name: "jhon", age: 23, city: "New York", country: "Usa" }

//spread operator precedence
const obj = {
    foo: 1,
    bar: 2,
    baz: 3
};
const newObj = {
    foo: 4,
    ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }

const newnewobj={
    ...obj,
    foo:4,

}
console.log(newnewobj)//{foo:4,bar:2,bar:3}