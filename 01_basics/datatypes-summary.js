//Primitive 

//7types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//Reference type( Non Primitive) Array, Objects, Functions

const heros = ("shaktiman", "naagraj", "doga")
let myObj ={
    nmae: "Adi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}
//stack(primitive), heap(non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);