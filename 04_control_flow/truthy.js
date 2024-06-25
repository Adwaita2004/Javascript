const userEmail = "a@adwaita.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email")
}

//falsy values
//false, 0, -0, BigInt On, "", undefined, NaN

//truthy values
//"0", 'false', " ", function(){}

//Nullish Coalescing Opertor (??): null undefined

let val1
//val1 = 5??10
//val1 = null ?? 10
val1 = null ??10 ??20

console.log(val1)

//Ternary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")