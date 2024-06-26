//object
// var car = new Object();
// car.name = 'BMW';
// car.price = '$10000';
// console.log(car);
//console.log(car.name);

//Object+Function
function book(title,price){
    this.title = title;
    this.price = price;
}
var result = new book('Japan', '5000Ks')
console.log(result);
console.log(result.price);
//Object
// new book = new Object();
// book.title = 'English';
// book.price = '4000Ks';

let num = 1.45614893022;
console.log(num.toFixed(3));
var name = "Hello World";
var date = new Date();
console.log(name[2]);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(6,3));
// console.log(name.trim());//for space
console.log(name.split(" "));
console.log(date);
var today = "29/02/2024";
console.log(today.split("/"));
[day,month,year] = today.split("/");
console.log(day);
console.log(month);
console.log(year);