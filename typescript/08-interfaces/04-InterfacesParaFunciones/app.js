"use strict";
(() => {
    let addNumbersFunction;
    // Implementamos una interfaz en una funcion
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    let subsNumbersFunction = (a, b) => {
        return a - b;
    };
    console.log(addNumbersFunction(10, 5));
    console.log(subsNumbersFunction(10, 5));
})();
