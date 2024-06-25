const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num > 4) //if we use scope {}we have to use return keyword
//console.log(newNums)

const newNums = []
myNums.forEach( (num) => {
    if(num> 4){
        newNums.push(num)
    }
})
console.log(newNums)