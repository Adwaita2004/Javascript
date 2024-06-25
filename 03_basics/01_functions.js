function loginUserMessage(username){
    return `${username}jus logged in`
}

//console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username: "hitesh",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))