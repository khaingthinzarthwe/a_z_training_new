//Number Object
let num= 3.14159
console.log(num.toFixed(3));

//String Object
let name = "Hong Haein"
let greet = `Hello ${name}`
let welcome = new String("Welcome");
console.log(name.length);
console.log(welcome.length);
console.log('Hello'.length);
console.log(name[2]);
console.log(name.charAt(3));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(0,4));

let text = " Hello World "
console.log(text.trim());
console.log(text.split(" "));
console.log(text.split());

//Object
//literal object
let cat = {
    color : "Yellow",
    name :  "Puss",
    legs : 4,
};
console.log(cat.legs);
console.log(cat["legs"]);
console.log(cat.color);
console.log(cat["color"]);

let birds = {
    color : "green",
    legs : 2,
};
console.log(birds);
birds.name = "Gwon";
birds["color"] = "grey";
console.log(birds); 
//destructuring
let cast = {
    name : "Sung SooJi",
    age : 18,
}
function greeting({name,age}){
    return `Hello ${name}, you are ${age} years old`
}
let greetingMsg = greeting(cast);
console.log(greetingMsg);
//function expression
let user = {
    name : "Bob",
    hello : function() {
        return `Hello, I'm ${this.name}`
    }
}
console.log(user.name);
user.name = "Alice"
console.log(user.hello());

//object+array
let people  = [
    {name: "Alice", age: 21, gender: "Female"},
    {name: "Bob", age: 22, gender: "Male" },
    {name: "Zack", age: 24, gender: "Male" }
]
let resultN = people.map( p => p.name );
console.log(resultN);
let resultF = people.filter( p => p.gender === "Male")
console.log(resultF);