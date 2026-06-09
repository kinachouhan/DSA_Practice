// // 1. Shopping Bill Generator
// let items = [
// { name:"Mouse", price:500 },
// { name:"Keyboard", price:1000 },
// { name:"Monitor", price:10000 }
// ]

// function calculateTotal(items){
//     let total=0
//     items.map((item)=>{
//         total+=item.price
//     })
//     return total
// }
// console.log(calculateTotal(items))


// // 2. Find Adult User
// let users= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ]
// function findAdultUser(users){
//     return users.filter( user => user.age >18)
// }
// console.log(findAdultUser(users))


// // 3. Product Names Extractor
// let products= [
// { name:"Laptop", price:50000 },
// { name:"Mouse", price:500 }
// ]
// function getProductNames(produts){
//     let prodcutName = []
//     products.filter( product => prodcutName.push(product.name) )
//     return prodcutName
// }
// console.log(getProductNames(products))


// // 4. Find User By Name
// let users= [
// { name:"Ritik" },
// { name:"Aman" },
// { name:"Priya" }
// ];
// function findUser(users , userName){
//     return users.find( user => user.name == userName)
// }
// console.log(findUser(users , "Aman"))

// //5 Total Marks
// let students= [
// { name:"Ritik", marks:80 },
// { name:"Aman", marks:90 },
// { name:"Priya", marks:70 }
// ];
// function getTotalMarks(students){
//     let total = 0
//     students.map(student => total+=student.marks)
//     return total
// }
// console.log(getTotalMarks(students))

// //6 Available Products
// let products= [
// { name:"Mouse", stock:10 },
// { name:"Keyboard", stock:0 },
// { name:"Monitor", stock:5 }
// ];
// function showAvailableProducts(products){
//    return products.filter( product => product.stock >0)
// }
// console.log(showAvailableProducts(products))

// 7. Add New Student
// let students = []
// function addStudent(students , student){
//     return students.push(student)
// }
// addStudent(students , "Kina")
// addStudent(students , "kana")
// console.log(students)

// // 8. Count Premium Products
// let products= [
// { name:"Laptop", price:50000 },
// { name:"Phone", price:30000 },
// { name:"Mouse", price:500 }
// ]
// function countPremiumProdcuts(prducts){
//     return products.filter( product => product.price > 10000)
// }
// console.log(countPremiumProdcuts(products))

// // 9. Shopping Cart Total
// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ]
// function getCartTotal(cart){
//     let total = 0
//     cart.map( item => total+= item.price * item.qty)
//     return total
// }
// console.log(getCartTotal(cart))

// 10. Student Average Generator
let students= [
{ name:"Ritik", marks: [80,90,85] },
{ name:"Aman", marks: [70,75,80] }
]
function getAverageMarks(students){
   students.map( (student)=>{
        let total = student.marks.reduce( (acc, val)=>{
            return acc+val
        }, 0)
        let average = total/ student.marks.length
        console.log(student.name , average)
    })
}
getAverageMarks(students)

