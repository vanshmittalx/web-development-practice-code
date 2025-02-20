// console.log("Hello I am conditional tutorial")

let age = 18;

if (age>=18) {
    console.log("You can drive");
}
else if (age==0){
    console.log("You are a baby");
}
else {
    console.log("You cannot drive");
}

let a = 6;
let b = 8;
c = a>b ? (a-b) : (b-a);
console.log(c)
// translates to
// if (a>b){
//     c = a-b;
// }
// else {
//     c = b-a;
// }