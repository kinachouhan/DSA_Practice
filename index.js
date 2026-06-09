// 1. Shopping Bill Generator
let items = [
{ name:"Mouse", price:500 },
{ name:"Keyboard", price:1000 },
{ name:"Monitor", price:10000 }
]

function calculateTotal(items){
    let total=0
    items.map((item)=>{
        total+=item.price
    })
    return total
}
console.log(calculateTotal(items))


// 2. Find Adult User
let users= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
]
function findAdultUser(users){
    return users.filter( user => user.age >18)
}
console.log(findAdultUser(users))
