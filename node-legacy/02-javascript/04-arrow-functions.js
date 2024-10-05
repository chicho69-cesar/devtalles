// Funcion con function
function sumar1(a, b) {
  return a + b;
}

// Arrow function
const sumar2 = (a, b) => {
  return a + b;
}

// Arrow function con return implicito
const sumar3 = (a, b) => a + b;

console.log(sumar1(10, 20));
console.log(sumar2(10, 20));
console.log(sumar3(10, 20));
