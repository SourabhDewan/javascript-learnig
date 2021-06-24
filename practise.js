const items = [
    {name : 'Bike', price : 100},
    {name : 'Tv', price : 200},
    {name : 'Album', price : 20},
    {name : 'Mouse', price : 7},
    {name : 'Keyboard', price : 25},
    {name : 'Monitor', price : 125}
]

/*

// Example for filter method
// filter is used to filter an array 
const filterItems = items.filter((items)=>{
    return items.price >= 50
})

console.log(filterItems);

//  Example for Map Methods
//  map methods used to obtain specific key value from an array 
const mapItems = items.map((items)=>{
    return items.name
})

console.log(mapItems);

// Example for Find Methods
// find method used to find any item from the array, but it gives the very first item 

const findItems = items.find((items)=>{
    return items.name === 'Tv'
})

console.log(findItems);

// forEach method 
//  forEach is not return any thing, it is similar to for loop, it take function

items.forEach((items)=>{
    console.log(items);
})

// some method 
// some method is used to find the boolen value with our condition 

const isExpensiveItems = items.some((items)=> {
    return items.price <= 7;
})

console.log(isExpensiveItems);

// every method
// every method is just same as some method, it will revert entire array condition

const everyMethod = items.every((items) =>{
    return items.price <=200; // every items price is greter then or equal to 200 
})

console.log(everyMethod);
*/


// Problem 1
// const input = [ 1, -4, 12, 0, -3, 29, -150];

// // Sum of positive element

// const positiveNumber = input.filter((input) => {
//     return input >= 0
// })

// console.log(positiveNumber);
// let sumOfPositiveNumber = 0;
// positiveNumber.forEach((positiveNumber)=> {
//     sumOfPositiveNumber = sumOfPositiveNumber + positiveNumber
// })
// console.log(sumOfPositiveNumber);

// Problem 2
const input = 'George Raymond Richard Martin';

// const splittedString = input.split(" ");
// console.log(splittedString);

// const firstLetter = splittedString.map((splittedString)=>{
//     return splittedString[0];
// })
// console.log(firstLetter.join("-"));
// console.log(input.split(' ').map(word => word[0]).join(''));

// function makeAdder(valueToAdd) {
//     function sum(parameter) {
//         return valueToAdd + parameter;
//     }
//     return sum;
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(10));
// console.log(add10(10));

// const myBtn = document.getElementById("myBtn")
// myBtn.addEventListener("click", function(){
//     console.log("The Button is pressed")
// })

// Promises 
// promises gives the result either yes or no 

// const p = new Promise((resolve, reject) => {
//     // condition
//     let x = 1 + 1;
//     if (x==2){
//         resolve('True')
//     }else {
//         reject('false')
//     }
// })

// p.then((mes) => {
//     console.log("This is in the then " + mes);
// }).catch((mes)=>{
//     console.log(`This is in the then ${mes}`)
// })

"use strict";

function outer() {
  const a = 10;
  let b = 100;

  function inner() {
    let c = 20;
    console.log(`a=${a}, b=${b}, c=${c}`);
    b++;
    c++;
  }

  return inner;
}

// outer() invoked the first time
// fnFirst is now a function inner and not a value.

const fnFirst = outer();

// outer() invoked the second time but assigned to different variable
const fnSecond = outer();
fnFirst(); // a= 10, b = 100, c = 20
fnFirst(); // a= 10, b = 101, c = 20
fnFirst(); // a= 10, b = 102, c = 20
fnSecond(); // a= 10, b = 100, c = 20