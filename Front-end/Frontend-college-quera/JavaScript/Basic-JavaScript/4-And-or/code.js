const [x1, y1, x2, y2] = readline().split(" ").map(n => +n);

let message = x1 == x2 ? "Vertical" : ((y1 == y2) ? ("Horizontal") : ("Try again"));
console.log(message);