console.log("javascript loops");

for (let i = 0; i <= 10; i++){
    console.log(i);
}
let obj = {
    name: "Vansh",
    age: 21,
    city: "Delhi"
}
for (const key in obj) {
    console.log(key)
}
for (const c of "Vansh") {
    console.log(c);
}