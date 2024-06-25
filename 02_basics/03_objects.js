//sinleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Adi",
    "full name": "Adi",
    [mySym]: "mykey1",
    age: 20,
    location: "Tripura",
    email: "adwaita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Adwaita@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "Adwaita@microsoft.com"
console.log(JsUser)
