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