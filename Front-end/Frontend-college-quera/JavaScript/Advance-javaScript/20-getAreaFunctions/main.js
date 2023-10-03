function getAreaFunctions(shapes) {
  return shapes.map((x) => area[x]);
}

const area = {
  square: (x) => {
    return x * x;
  },
  circle: (x) => {
    return (x * x * Math.PI);
  },
  rectangle: (x, y) => {
    return x * y;
  },
  triangle: (x, y) => {
    return (x * y) / 2;
  },
};

const functions = getAreaFunctions([
  "square",
  "circle",
  "rectangle",
  "triangle",
]);

console.log(functions[0](20));
console.log(functions[1](2));
console.log(functions[2](2, 4));
console.log(functions[3](4, 5));


//////////// quera answer
const SHAPES = {
	square: (a) => a * a,
	circle: (r) => Math.PI * r * r,
	triangle: (a, h) => (a * h) / 2,
	rectangle: (a, b) => a * b,
};

function getAreaFunctions(shapes) {
	return shapes.map((shape) => SHAPES[shape]);
}

export default getAreaFunctions;
