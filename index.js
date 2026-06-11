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
// let students= [
// { name:"Ritik", marks: [80,90,85] },
// { name:"Aman", marks: [70,75,80] }
// ]
// function getAverageMarks(students){
//    students.map( (student)=>{
//         let total = student.marks.reduce( (acc, val)=>{
//             return acc+val
//         }, 0)
//         let average = total/ student.marks.length
//         console.log(student.name , average)
//     })
// }
// getAverageMarks(students)

// // 11. Inventory Search
// let
// inventory= [
// { id:1, name:"Laptop" },
// { id:2, name:"Mouse" },
// { id:3, name:"Monitor" }
// ]
// function findProductById(id){
//     return inventory.filter( item => item.id == id)
// }
// console.log(findProductById(1))


// // 12. Usernames generators
// let users= [
// { name:"Ritik Rajput" },
// { name:"Aman Gupta" }
// ]

// function userNameGenerator(users){
//     return users.map( user => user.name.split(" ").join("_"))
// }
// console.log(userNameGenerator(users))

// // 13. Highest Scoring Student
// let students = [
//     { name: "Ritik", marks: 85 },
//     { name: "Aman", marks: 95 },
//     { name: "Priya", marks: 75 }
// ]

// function findHighestScore(students) {
//     let highestScoringStudent
//     let highestScore = 0
//     students.map((student) => {
//         if (student.marks > highestScore) {
//             highestScore = student.marks
//             highestScoringStudent = student.name
//         }
//     })
//     console.log(highestScoringStudent)
// }
// findHighestScore(students)

// // 14. Update product stock 
// let products = [
//     { id:1 , name: "Mouse", price: 500, qty: 2 },
//     { id:2 , name: "Keyboard", price: 1000, qty: 1 },
//     { id:3 , name: "Monitor", price: 10000, qty: 1 }
// ]

// function updateStock(id, quantity){
//     let product = products.find( product => product.id == id)
//     if(product){
//         product.qty = quantity
//     }
//     return products
// }
// console.log(updateStock(2 , 1))

// // 15. Sort Students by Marks
// let data = [
// {name:"A", marks:70},
// {name:"B", marks:95},
// {name:"C", marks:80}
// ]

// function sortStudents(data){
//     return data.sort( (a ,b)=> a.marks - b.marks)
// }
// console.log(sortStudents(data))

// 16. Student grade report
// let students = [
//     { name: "Ritik", marks: [80, 90, 85] },
//     { name: "Aman", marks: [50, 40, 60] }
// ]

// function generateReport(students) {
//     let result = []
//     students.map((student) => {
//         let total = student.marks.reduce((acc, val) => {
//             return acc + val
//         }, 0)
//         let average = total / student.marks.length
//         let grade
//         if (average > 80) {
//             grade = "A"
//         } else if (average > 60) {
//             grade = "B"
//         } else if (average > 40) {
//             grade = "C"
//         } else {
//             grade = "D"
//         }
//         result.push({
//             name: student.name,
//             average,
//             grade
//         })
//     })
//     return result
// }
// console.log(generateReport(students))

// // 17. Product Revenue Analyzer
// let products = [
//     { name: "Mouse", price: 500, sold: 20 },
//     { name: "Keyboard", price: 1000, sold: 10 }
// ]

// function revenueAnalyzer(products) {
//     let revenuePerProduct = products.map((product) => ({
//         name: product.name,
//         revenue: product.price * product.sold
//     }))

//     let totalrevenue = revenuePerProduct.reduce((acc, val) => acc + val.revenue, 0)

//     let bestSeller = products.reduce((best, product) => {
//         return product.sold > best.sold ? product : best
//     })
//     return { revenuePerProduct, totalrevenue, bestSeller }
// }

// revenueAnalyzer(products)

// 18. Attendence system
// let
// students= [
// { name:"Ritik", present:true },
// { name:"Aman", present:false },
// { name:"Priya", present:true }
// ]

// function countPresent(students){
//      let count = 0
//      students.map( (student) =>{
//          if(student.present == true){
//             count++
//          }
//      })
//      return count
// }
// console.log(countPresent(students))

// function countAbsent(stuldents){
//      let count = 0
//      students.map( (student)=>{
//         if(student.present == false){
//             count++
//         }
//      })
//      return count
// }
// console.log(countAbsent(students))

// function getPresentStudents(students){
//     return students.filter( student => student.present == true)
// }
// console.log(getPresentStudents(students))

// 19. Library Management system
// let data = [{
// id:1,
// title:"Atomic Habits",
// borrowed:false
// }]

// function addBook(bookName){
//     data.push({
//         id: data.length+1,
//         title: bookName,
//         borrowed: false
//     })
// }
// addBook("Love story")

// function borrowBook(id){
//     let book = data.find( book => book.id == id)
//     if(book){
//         book.borrowed = true
//     }
// }
// borrowBook(2)

// function returnBook(id){
//     let book = data.find( book => book.id == id)
//     if(book){
//         book.borrowed = false
//     }
// }
// returnBook(2)

// function showAvailableBooks(){
//     return data.filter( book => book.borrowed == false)
// }
// console.log(showAvailableBooks())


//20. Order Management system
// let orders = [{
// id:1,
// customer:"Ritik",
// amount:5000,
// status:"Pending"
// }]

// function createOrder(customerName , amount){
//      orders.push({
//          id: orders.length+1,
//          customer: customerName,
//          amount,
//          status: "Pending"
//      })
// }
// createOrder("Kina" , 1000)

// function updateStatus(id , status){
//     let order =  orders.find( order => order.id == id)
//     if(order){
//         order.status = status
//     }
// }
// updateStatus(1 , "Delivered")

// function getPendingOrders(){
//     return orders.filter( order => order.status == "Pending")
// }
// console.log(getPendingOrders())

// function getCompletedOrders(){
//      return orders.filter( order => order.status == "Delivered")
// }
// console.log(getCompletedOrders())
// console.log(orders)

// 21. Mini E-Commerce System
// let products = []

// function addProduct(productName , price , stock){
//      products.push({
//         id: products.length+1,
//         name: productName,
//         price,
//         stock
//     })
// }
// addProduct("Laptop" , 50000 , 10)
// addProduct("Keyboard" , 1000 , 20)

// function removeProduct(id){
//     products = products.filter( (product)=> product.id !== id)
// }
// removeProduct(1)

// function updateStock(id , stock){
//      let product = products.find( product => product.id == id)
//      if(product){
//         product.stock = stock
//      }
// }
// updateStock(2, 10)

// function purchaseProducts(id){
//     let product = products.find( (product)=> product.id == id)
//     if(product){
//         product.stock-= 1
//     }
//     return `1 ${product.name} purchased`;
// }
// purchaseProducts(2)

// function calculateInventoryValues(){
//     return products.reduce( (acc, val)=>{
//         return acc +(val.price*val.stock)
//     },0)
// }
// console.log(calculateInventoryValues())
// console.log(products)

// 22. Print: Fizz → divisible by 3 , Buzz → divisible by 5 , FizzBuzz → divisible by both
// function FizzBuzz(num){
//     if(num%5==0 && num%3==0){
//         console.log("FizzBuzz")
//     }else if(num%3==0){
//         console.log("Fizz")
//     }else if(num%5==0){
//         console.log("Buzz")
//     }else{
//         console.log(num)
//     }
// }
// FizzBuzz(2)

// 23. [1,[2,3],[4,[5]]]
// let arr = [1,[2,3],[4,[5]]]
// function flatten(arr){
//     return arr.flat(Infinity)
// }
// console.log(flatten(arr))

//24. implement once()
// function once(fn){
//     let call = false
//     let result
//     return function(...args){
//         if(!call){
//             call = true
//             result = fn(...args)
//         }
//         return result
//     }
    
// }
// const fn = once((a,b)=>a+b)
// console.log(fn(2,3))

// 25. Implement memoize()
// function memoize(fn){
//     let result = {}
//     return function(...args){
//         let key = args.join(",")
//         if(key in result){
//             console.log("Caching from result")
//             return result[key]
//         }
//         return result[key] = fn(...args)
//     }
// }
// const add = (a, b) => a + b;
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(2, 3)); 
// console.log(memoizedAdd(2, 3));

// // 26. counter
// function counter(){
//     let count = 0
//     return function(){
//          count++
//          return count
//     }
// }
// let count = counter()
// console.log(count())
// console.log(count())

// 27. Write a recursive function for factorial.
// function factorial(num){
//     if(num<=0) return 1
//     return num*factorial(num-1)
// }
// console.log(factorial(5))

// //28. Write recursive Fibonacci function.
// function fibonacciFn(num){
//     if(num<=1) return num
//     return fibonacciFn(num-1) + fibonacciFn(num-2) 
// }
// console.log(fibonacciFn(5))


// //29. Create a function that finds power using recursion.
// function FindPower(base , pow){
//     if(pow <= 0) return 1
//     return base * FindPower(base , pow-1)
// }
// console.log(FindPower(2,3))

// // 30. Reverse an array.
// let arr = [1,2,3,4,5]
// let reverse = []
// for(let i=arr.length-1 ; i>=0 ; i--){
//    reverse.push(arr[i])
// }
// console.log(reverse)

// 31. Sort numbers ascending.
// let arr = [4,2,1,3,5,6,7,8]

// let sorted = arr.sort( (a,b)=> a-b)
// console.log(sorted)

// 32. Sort numbers descending.
// let arr = [4,2,1,3,5,6,7,8]
// let sorted = arr.sort( (a,b)=> b-a)
// console.log(sorted)