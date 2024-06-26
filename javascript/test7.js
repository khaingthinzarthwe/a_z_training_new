let nums = [ 1, 12, 5, 4, 9, 5 ]
let result1 = nums.map(function(n) {
    if (n === 5) n+=10
    return n
})
console.log(result1);

//if condition
let people = [
    { name: "Alex" },
    { name: "Bob", gender: "M" },
    { name: "Tom", gender: "m" },
    { name: "Mary", gender: "F" },
]
let result2 = people.map(function(person) {
    if(person.gender) {
    if(person.gender === "m" || person.gender === "M") {
    person.gender = "Male"
    }
    if(person.gender === "f" || person.gender === "F") {
    person.gender = "Female"
    }
    } else {
    person.gender = "Unknown"
    }
    return person
})
console.log(result2);

//switch
let result3 = people.map(function(person) {
    switch(person.gender) {
    case "m":
    case "M":
    person.gender = "Male"
    break
    case "f":
    case "F":
    person.gender = "Female"
    break
    default:
    person.gender = "Unknown"
    }
    return person
})
console.log(result3);

//ternary operator
let user = { name: "Bob", age: 17 }
let status = user.age >= 18 ? "Authorized" : "Unauthorized"

//looping objects & arrays
let use = { name: "Bob", age: 22, gender: "Male" }
for(p in user) {
console.log(`${p} is ${user[p]}`)
}