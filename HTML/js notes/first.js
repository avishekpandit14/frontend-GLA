// const findAge = function(birthYear, currentYear) {
//   return currentYear - birthYear;
// };


// let birthYear = parseInt(prompt(" birth year:"));
// let currentYear = parseInt(prompt("current year:"));

// for (let i = birthYear; i <= currentYear; i++) {
//   console.log(i);
// }


// let age = findAge(birthYear, currentYear);
// console.log(" age = " + age);


// function changecolor() {  
//   const h=document.getElementById("h");
//   h.style.color="red";
// } 



// in javascript each object is linked to a prototype object
// prototyple inheritance - the prototype contains methods (functions) that are accessible to all objects 
// linked to that prototype this is different from normal inhertance as there child class inherits from parent class 
// but in prototype inheritance all objects inherit directly from the prototype object
// and in this instance is inherited from Object.prototype

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };



const person = function(name, age) {
  this.name = name;
  this.age = age;
};

person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};non