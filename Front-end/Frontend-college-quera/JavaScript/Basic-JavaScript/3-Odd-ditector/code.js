const A = +readline();
const B = +readline();
const C = +readline();

let a = A%2;
let b = B%2;
let c = C%2;


if((a == 0) || ((b == 0) && (c == 0)) ){
    console.log("good")
}
else {
    console.log("bad")
}

//const A = +readline();
//const B = +readline();
//const C = +readline();

//const isGood = (A % 2 == 0) || (B % 2 == 0 && C % 2 == 0);

//if (isGood) {
//    console.log("good");
//} else {
//   console.log("bad");
//}
// console.log(((A % 2) === 0 || ((B % 2) === 0 && (C % 2) === 0)) ? "good" : "bad");