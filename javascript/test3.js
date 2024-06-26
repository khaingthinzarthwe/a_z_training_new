//array
//simple array
var number = new Array(1, 2, 3, "emily", "26");
console.log(number);
for(var i=0;i<number.length;i++){
    console.log(number[i]);
}
var fruits = ["mango", "apple", "orange", "banna"];
console.log(fruits[2]);

var color = [];
color[0]= 'blue';
color[1]= 'white';
color[2]= 'black';
console.log(color);
//associated array lenght=0
const associatedArray = [];
associatedArray['name'] = 'emily';
associatedArray['age'] =  26;
console.log(associatedArray);

var asso1 ={
    name: "amy",
    age: 20,
    // greet:{greeting(){
    //     console.log("hello");
    // }},
    greeting(){
        console.log(`hello ${this.name}`);
    },
};
console.log(asso1['name']);
console.log(asso1.age);
asso1.greeting();

//
var  num1 = [1,2,3];
num1.push(4,5,6);
num1.unshift(-1,-2);
num1.pop();
num1.shift();
console.log(num1);

var num2 = num1.push(5,6,7);//array num2.length
num2 = [...num1,8]//array num1+num2
console.log(num2);

//map function 
var num3 = [1,2,3,4,5];
let result = num3.map(function(n){
    return n+10;
});
console.log(result);

var arr = [10,20];
// var a = arr[0];
// var b = arr[1];
[a,b] = arr;
// console.log(a);
// console.log(b);

function show([a,b]) {
    console.log(a);
    console.log(b);
}
// show(10,20);
var arr1 = [20,30];
// show(arr1[0],arr1[1]);
show(arr1);