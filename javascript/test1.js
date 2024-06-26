console.log("this is form external js");
document.write("hello world");

// alert("hi there");
// confirm("are you sure?");
// prompt("type any");

// do or don't
// userName/ user_name/userPhoneNumber (should)
//UserName/number one/1Number/#@$/_number/a (shouldn't)

//javascript data type
// 1.string => "" , '' => "s" => '10'
// 2.integer => 10 100 1000 10000
// 3.boolean => true, false
// 4.float => 1.0 10.34 1.2738 384995.1
console.log(typeof("hello i am yoh yoh"));
console.log(typeof 10);
console.log(typeof true);

//variable declaration
//let var const
let name="yoh yoh";
console.log(name);

//operators
//arithmetic operators
let num1= 10;
let num2= 20;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
num1 = num1+1;
console.log(num1);//11
console.log(num1++);//12 but 11
console.log(++num1);//13
num2 = num2-1;
console.log(num2);//19
console.log(num2--);//18 but 19
console.log(--num2);//17

//comparison operators
let num3 = 15;//integer
let num4 = 25;//integer
let num5 = "25";//string
console.log(num3>num4);
console.log(num3<num4);
console.log(num3==num4);
console.log(num3!=num4);
console.log(num3>=num4);
console.log(num3<=num4);
// == value only !=
console.log(num4==num5);
// === value + type  !==
console.log(num4===num5);

//logical operators
//AND
if (num1<num2 && num3==num4){
    console.log("OK");
}else{
    console.log("Fail");
}
//OR
if (num1<num2 || num3==num4){
    console.log("OK");
}else{
    console.log("Fail");
}
//NOT
if (!(num1<num2)){
    console.log("OK");
}else{
    console.log("Fail");
}

//assignment operators
let num6 = 10;
// num6 += 5;
// num6 -= 5;
// num6 *= 5;
// num6 /= 5;
num6 %= 5;
console.log(num6)

//conditional operator

// let result;
// if (num4 == num5){
//     result = "same";
// }else{
//     result = "not same";
// }

//clean code
let result = num4 == num5 ? "same" : "not same";
console.log(result);

//if, else, else-if
let fruit = "apple";
if(fruit == "apple") console.log("this is apple");
let color = "red";
if(color == "purple"){
    console.log("this is purple");
}else if(color == "yellow"){
    console.log("this is yellow");
}
else if(color == "red"){
    console.log("this is red");
}
console.log("the end");

//switch
let fruits = prompt("enter fruits name");
console.log(fruits);
switch(fruits){
    case "apple" : console.log("this is apple");break;
    case "banna" : console.log("this is banna");break;
    case "orange" : console.log("this is orange");break;
    case "watermelon" : console.log("this is watermelon");break;
    default : console.log("there is no right fruit")
}