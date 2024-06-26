//settimeout
console.log(1)
console.log(2)
setTimeout(() => console.log(3), 1000)
console.log(4)

//promises
function add1000(){
    let result = 0
        for(let i=1; i <= 1000; i++) {
        result += i
    }
    return result
}
console.log("some processes")
console.log(add1000())
console.log("more processes")

// function add1000later() {
//     return new Promise( done => {
//         done( add1000() )
//     })
// }
// console.log("some processes")
// add1000later().then( result => console.log(result) )
// console.log("more processes")

// //resolve,reject
// function add1000later() {
//     return new Promise( (resolve, reject) => {
//         let result = add1000()
//         if(result) resolve(result)
//         else reject()
//     })
// }
// add1000later()
// .then( result => console.log(result) )
// .catch( () => console.log("Error") )

//async & await
async function add1000later() {
    let result = await add1000()
    console.log(result)
}
console.log("some processes")
add1000later()
console.log("more processes")

// async function covidInfo() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()
//     const global = data.Global
//     const allCountries = data.Countries
//     const myanmar = allCountries.find(c => c.Country === "Myanmar")
//     console.log("Global:", global, "Myanmar:", myanmar)
// }
// covidInfo()