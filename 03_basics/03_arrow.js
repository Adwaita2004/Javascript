const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); //this refers to current context
    }

}

//user.welcomeMessage()
//user.username = "Adi"
//user.welcomeMessage()

//console.log(this)

/*function chai(){
    let username = "hitesh"
    console.log(this.username); // function ke andar kam nahi karrta
}

chai()

*/
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4)) //agar curly bracket use huwa to return keyword use karna padega agar parenthesis use karna padega to use nhi karna padega
