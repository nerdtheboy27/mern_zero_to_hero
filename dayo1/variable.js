// There are 3 ways to create variables in JS 

//1) Var 

/*
- scope of var is global.
- value can be changed also.
*/

var a = 22

if(true){
    console.log(a);
}

//1) Let 

/*
- scope of var is Local.
- value can be changed also once assigned.
*/

if(true){
    let b = 22
}
console.log(b); // this will throw error


//1) Let 

/*
- scope of var is Local.
- value cannot be changed also once assigned.
*/

if(true){
    const c = 22;
    c =33;
    console.log(c); // this will throw error
}