// There are two types of datatypes in js

/*
1) Primitive
2)Non primitive

*/

// 1) Primitive

let a = 10
let b = 10.11
let c = "Hi"
let d = true
let e = undefined
let f = Symbol('123')
let g = 219312873981283162831632732463728434n
let h = null 

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)// datatype of null will be shown as object, it was a bug which is not fixed in js because it will make change in millions of code bases if they fix this bug


//1) Non - Primitive

let arr = [23,123,122,"hii"];

let obj = {"hello" : "aayush" , 
    "id":"3003",
    "pass":"nerd@2006"
}

function func(){
    console.log("this is a function")
}
console.log(typeof arr) // its datatype will also be object 
console.log(typeof obj) 
console.log(typeof func) 