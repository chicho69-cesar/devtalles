(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  // Implementamos una interfaz en una funcion
  addNumbersFunction = (a: number, b: number) => {
    return a + b;
  }

  let subsNumbersFunction: addTwoNumbers = (a: number, b:number) => {
    return a - b;
  }

  console.log(addNumbersFunction(10, 5));
  console.log(subsNumbersFunction(10, 5));
})();