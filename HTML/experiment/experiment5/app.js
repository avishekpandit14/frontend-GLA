// let arr=[10,20,30,40];
// for(let num of arr){
//     console.log(num);
// }


// // star pattern


// an array is data stucture that can store multiple values at once 


// const arr=[2,3,4,5,6];
// arr.push(7); // add element at the end
// const lastdigit=arr.pop(); // removes last element
// console.log(arr);
// console.log("last digit is ",lastdigit);

// arr.unshift(1);
// console.log(arr);

// arr.shift();
// console.log(arr);

// const arr1=[10,20,30];
// const arr2=[40,50,60];

// const newArr=[];
// for(let i=0;i<arr1.length;i++){
//     newArr.push(arr1[i]);
// }
// for(let i=0;i<arr2.length;i++){
//     newArr.push(arr2[i]);
// }
// console.log(newArr);

// const newArr=arr1.concat(arr2);
// console.log(newArr);


// const arr=[1,2,3,4,9,10,11,9,12];
// indexof9=arr.indexOf(9);
// console.log("index of 9 is ",indexof9);

// lastindexof9=arr.lastIndexOf(9);
// console.log("last index of 9 is ",lastindexof9);






// function calculation(calculation,num1,num2){
//     console.log(calculation(num1,num2));
// }

// const sum=function(first,second){
//     return first+second;
// }

// const multiply=function(first,second){
//     return first*second;
// }

// let firstValue=2;
// let secondValue=3;

// calculation(sum,firstValue,secondValue);
// calculation(multiply,firstValue,secondValue);


// var score=0;
// if(true){var score=10;
// console.log("inside if",score);
// }
// console.log("outside if",score);
// {
// let name ="John";
// console.log(name);
// }

// {
// let name="Doe";
// console.log(name);
// }

// const fruit=["apple","banana","mango"];
// fruit.push("orange");
// console.log(fruit);\\

// let score=0;
// const playerName="riya";

// function answerQuestion(isCorrect){
//     if(isCorrect){
//         score+=10;
//     }
// }

// answerQuestion(true);
// answerQuestion(false);
// console.log(playerName+" 's score is: " ,score);


// const person= num => num*num
// console.log(person(10));

// const greet= name => {
//     return "Hello "+name +"!";
// }
// console.log(greet("Riya"));


// const add=(a,b)=> a+b;
// console.log(add(5,10));

// const isEven= num => num%2===0;
// console.log(isEven(4));
// console.log(isEven(7)); 


// const numbers=[1,2,3,4,5];
// const squares = numbers.map(num => num*num);
// console.log(squares); 

// let score=0;
// const addPoints= (points) => score += points;
// const losePoints= (points) => score -= points;
// addPoints(10);
// losePoints(2);
// console.log("Final score: ", score);



// const name="Riya";
// const age=2004;

// const message="Hello, my name is "+name+" and I am "+age+" years old.";
// console.log(message);

// const message=`Hello, my name is ${name} and I am ${2025-age} years old.`;
// console.log(message);

// const product= "Laptop";
// const price= 999.99;

// const message=`The price of the ${product} 
// is $${price}.
// Thank you for shopping with us!`;
// console.log(message);


// const person={
//     name:"Riya",
//     age:20,
//     city:"New York",
//     introduce:function(){
//         return `Hello, my name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.,
//         i am ${this.age} years old.
//         i'm from ${this.city}.`; 
//     },
// };

// let herAge="age";

// console.log(person[herAge]);
// person.birthYear=2025-person.age;

// person.tellYourAge=function(){console.log(`i am ${this.age}years old`);}
// console.log(person.introduce());
// console.log("Birth Year: ",person.birthYear);


// const fruits=["apple","banana","mango"];

// const [ ,  ,  ,fourthFruit,fifthFruit]=[
//     "apple","banana","mango","orange","grape"
// ]

// console.log(a)

// console.log(thirthFruit,fifthFruit);



// const fruits=["apple","banana","mango","orange"];
// const moreFruits=["apple","banana","mango","orange","grape","pineapple"];

// const combinedFruits=[...fruits,...moreFruits];

// const[firstFruit,secondFruit,...restFruits]=combinedFruits;
// console.log(restFruits);
// console.log(combinedFruits);  //spread operator


// function sum(...values){
//     console.log(values);
//     let sum=0;
//     for(let i=0;i<values.length;i++){
//         sum+=values[i];
//     }
//     return sum;
// }




// console.log(10);
// setTimeout(()=>
//     console.log(20),5000);
// console.log(40);


// let count=1;
// const timer=setInterval(()=>{
//     console.log("hello",count);
//     count++;
//     if(count>10){
//         clearInterval(timer);
//     }
// },1000);


// console.log("New code added");

// document.getElementById("btn").onclick=function(){
//     alert("Button Clicked!");
// }
// document.getElementById("title").textContent="india won by 52 runs ";


// const greet=(name)=>"hello,"+name+"!";
// console.log(greet('viprendra'));

// const greet=name=>`hello, ${name}!`;
// console.log(greet('viprendra'));

// const add=(a,b)=>a+b;
// console.log(add(3,4));

// const iseven=(num)=>num%2===0;
// console.log(iseven(4));

// const name=(num)=>`the number is ${num}`;
// console.log(name(5));

// const multily=(a,b)=>`product is ${a*b}`;
// console.log(multily(3,4));

// const arr=[1,2,3,4,5];
// const arr2=arr.map(name=>name*2);
// console.log(arr2);


// let score=0;
// const addpoints=points=>score+=points;
// const subpoints=points=>score-=points;
// addpoints(5);
// subpoints(3);
// console.log(score);
// addpoints(10);
// console.log(score);


// const name='viprendra';
// const birth=2008;
// console.log(`my name is ${name} and my age is ${2025-birth}`);


// console.log(`hello
//     viprendra`);


// const name=(num=5)=>`the number is ${num}`;
// console.log(name());
// console.log(name(10));


// const person={
//     name:'viprendra',
//     age:19,
//     city:'agra',
//     introduce:function(){
//         return `hell , my name is ${this.name}, 
//         i am ${this.age} years old  and 
//         i live in ${this.city}`;
        
//     },

// };

// let hisage="age";

// console.log(person.introduce());
// console.log(person["name"]);
// console.log(person["introduce"]())

// console.log(person[hisage]);

// console.log(person.herage);



// const [a,b]=[1,2];
// console.log(a);
// console.log(b);

// const {name,age}={name:'viprendra',age:19};
// console.log(name);
// console.log(age);

// const name='viprendra';
// const person={
// name,
// greet(){
//     return `hello, ${this.name}!`;
// }
// };

// console.log(person.name);
// console.log(person.greet());


// const person={
//     name:'viprendra',
//     age:19,
//     city:'agra',
//     introduce:function(){
//         return `hell , my name is ${this.name}, 
//         i am ${this.age} years old  and 
//         i live in ${this.city}`;
        
//     },

// };

// let hisage="age";

// person.birth=2025-person.age;
// console.log(person);
// // delete person.city;

// person.tellyourage=function(){
//     console.log(`my birth year is ${this.birth}`);
// }
// person.tellyourage();


// const personname=person.name;
// console.log(personname);

// const{name,age,city}=person;
// console.log(name);
// console.log(age);
// console.log(city);

// const {name:hername,age:herage}=person;
// console.log(hername);
// console.log(herage);

// const {n,a,c}=person;                 can not use
// console.log(n);
// console.log(a);
// console.log(c);

// let arr=[1,2,3,4,5];
// let [a,b]=arr;
// console.log(a);
// console.log(b);

// let [x,,y]=arr;
// console.log(x);
// console.log(y);

// let [p,...q]=arr;
// console.log(p);
// console.log(q);


// const fruit=['apple','banana','cherry','mango','grape'];
// const[,,,x,y]=fruit;
// console.log(x);
// console.log(y);


// const fruit=['apple','banana','cherry','mango','grape'];
// const morefruit=['kiwi','peach'];
// const allfruit=[...fruit,...morefruit];
// console.log(allfruit);

// const [first,second,...others]=allfruit;
// console.log(first);
// console.log(second);
// console.log(others);

// const combfruit=fruit.concat(morefruit);
// console.log(combfruit);

// const arr=[1,2,3,4,5];
// const arr1=[...arr];
// arr[0]=10;
// console.log(arr);
// console.log(arr1);
// 


// let total=0;
// function sum(...numbers){
    
//     for(const num of numbers){
//         total+=num;
//     }
//     return total;           
// }
// console.log(sum(1,2,3));    



// console.log("hello viprendra");
// setTimeout(()=>{
//     console.log("this is settimeout");
// },2000);

// console.log("end of script");   

// console.log("start of script");
// setInterval(()=>{
//     console.log("this is setinterval");
// },3000);
// console.log("end of script");

// console.log("start of script");
// let count=0;
// const time=setInterval(()=>{
//     console.log("hello"+count);
//     count++;
//     if(count===5){
//         clearInterval(time);
//     }
// })


// alert("hello");
// let a=prompt("age");
// let b=(`hello my age is:${a}`);
// alert(b);


// console.log("hello");
// setTimeout(()=>{console.log("hii")},2000);
// console.log("viprendra");
// setTimeout("hello",3000);        not happend



// const p=document.getElementById("p");
// setTimeout(()=>{
//     p.style.color="red";
//     p.style.fontSize="30px";
// },2000
// );
// setInterval(()=>{
//     const r=Math.floor(Math.random()*256);
//     const g=Math.floor(Math.random()*256);
//     const b=Math.floor(Math.random()*256);
//     p.style.color=`rgb(${r},${g},${b})`;
// },1000
// );

// let isRed=true;
// setInterval(()=>{
//     if(isRed){  
//         p.style.color="red";
//     }
//     else{
//         p.style.color="blue";
//     }
//     isRed=!isRed;
// },1000
// );

// let colors=["red","blue","green","yellow","purple","orange"];
// setInterval(()=>{
//     const randomIndex=Math.floor(Math.random()*colors.length);
//     p.style.color=colors[randomIndex];
// },1000
// );

// const title=document.getElementById("title");
// title.style.color="green";
// title.style.fontSize="40px";
// title.style.textAlign="center";
// title.textContent="hello viprendra singh";

// document.getElementById("title").style.color="green";
// document.getElementById("title").textContent="hello viprendra singh";

// const btn=document.getElementsByClassName("btn");
// setInterval(()=>{
//     const r=Math.floor(Math.random()*256);
//     const g=Math.floor(Math.random()*256);
//     const b=Math.floor(Math.random()*256);  
//     btn[0].style.backgroundColor=`rgb(${r},${g},${b})`;
// },1000)

// const btn=document.querySelector(".btn");
// setInterval(()=>{
//     const r=Math.floor(Math.random()*256);
//     const g=Math.floor(Math.random()*256);
//     const b=Math.floor(Math.random()*256);  
//     btn.style.backgroundColor=`rgb(${r},${g},${b})`;
// },1000)

// document.getElementById("btn").onclick=function(){
//     document.getElementById("title").textContent="you clicked the button!";
// }

// const btn=document.getElementById("btn");
// btn.onclick=()=>{
//     document.getElementById("title").textContent="you clicked the button!";
// }

// const btn=document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     document.getElementById("title").textContent="you clicked the button!";
// });

// const boxes=document.querySelectorAll(".box");
// boxes.forEach((box)=>{
//     box.onclick=  () =>{
//         box.style.backgroundColor="blue";
//     }
// })



// const btn=document.querySelector("#btn");
// btn.textContent="i am you dad";

// btn.style.color="white";
// btn.style.backgroundColor="black";
// btn.style.padding="10px 20px";
// btn.style.border="none";
// btn.style.borderRadius="5px";
// btn.style.cursor="pointer";
// setInterval(()=>{
//     const r=Math.floor(Math.random()*256);
//     const g=Math.floor(Math.random()*256);
//     const b=Math.floor(Math.random()*256);  
//     btn.style.backgroundColor=`rgb(${r},${g},${b})`;
// },1000)


const box=document.querySelector(".box");
// box.style.width="100px";
// box.style.height="100px";
// box.style.backgroundColor="red";
// box.style.margin="20px";

const btn=document.querySelector("#btn");

btn.addEventListener("click", function(event){
    console.log("Button clicked!");
    box.style.width="200px";
    box.style.height="200px";
    box.style.backgroundColor="green";
});