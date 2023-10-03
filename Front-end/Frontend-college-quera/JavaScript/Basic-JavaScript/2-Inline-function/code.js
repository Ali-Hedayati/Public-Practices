const [x, y] = readline().split(" ").map(n => +n);
const [x1, y1] = readline().split(" ").map(n => +n);

let message = x > x1 ? "Left" : "Right"
console.log(message);