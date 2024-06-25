const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Adi"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

/*const regularUser = {
    email: "adi@google.com",
    fullname: {
        userfullname: {
            firstname: "Adwaita",
            lastname: "Karmakar"
        }
    }
}
*/
//console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)


