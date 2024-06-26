//whitle loop
// let num = 1;
// while(num < 10){
//     console.log("number is "+ num);
//     num++;
// }
// console.log("end");
// //do while
// let num2 = 11;
// do{
//     console.log("number is "+  num2);
//     num2++;
// }while(num2 < 10);
// console.log("end");
// //for loop
// for(let num3=0;num3 <=5;num3++){
//     console.log(num3);
// }

// let number1 = parseInt(prompt("enter less than 5 for number1"));
// // console.log(typeof number1);
// while(number1 > 5){
//     number1 = parseInt(prompt("enter less than 5 for number1"));
// }
// let number2 = parseInt(prompt("enter greater than 5 for number2"));
// // console.log(typeof number2);
// while(number2 <= 5){
//     number2 = parseInt(prompt("enter greater than 5 for number1"));
// }
// for(number1; number1 <= number2; number1++){
//     console.log(number1);
// }

//function
//no argument function
function getName(){
    console.log("hello world!");
}
getName();
//one argument function
function gettNumber(num1 = 1){
    console.log(num1);
}
gettNumber(100);
//multi argument function
function sum(num1=0, num2=0){
    console.log(num1 + num2);
}
sum(100,3);
//type function and void function
//with return
function typeFunction(num1, num2) {
    return num1 + num2;
}
var result = typeFunction(100,200);
console.log(result);
//without return
function voidFunction(num1, num2) {
    console.log(num1+num2)
}
voidFunction(20,10);
var greeting = function(name){
    console.log(name);
};
//arrow funcion
var greet =  (name) => {
    console.log(name);
};
var gre = () => {
    console.log("hello world");
}
var one = () => console.log("hell0");
var two = (a,b) => console.log(a+b);
greeting("emily");
greet("eleven");
gre();
one();
two(2,3);