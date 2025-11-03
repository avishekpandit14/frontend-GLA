const findAge = function(birthYear, currentYear) {
  return currentYear - birthYear;
};


let birthYear = parseInt(prompt(" birth year:"));
let currentYear = parseInt(prompt("current year:"));

for (let i = birthYear; i <= currentYear; i++) {
  console.log(i);
}


let age = findAge(birthYear, currentYear);
console.log(" age = " + age);