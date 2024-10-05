"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta a salvo!';
    let myFunction; // Tipo de dato funcion
    let mySecondFunc; // Creamos un tipo de dato 
    // funcion que recibe dos number y retorna number
    /* myFunction = 10;
    console.log({ myFunction }); */
    myFunction = addNumber;
    console.log({ myFunction });
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log({ myFunction });
    console.log(greet('Cesar'));
    myFunction = saveTheWorld;
    console.log({ myFunction });
    console.log(myFunction());
    mySecondFunc = addNumber;
    console.log(mySecondFunc(10, 15));
})();
