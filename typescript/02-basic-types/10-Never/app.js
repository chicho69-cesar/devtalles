"use strict";
(() => {
    /* El tipo de dato never, no es undefined ni null, es never */
    /* Las funciones never, nunca deben de terminar de manera exitosa */
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!');
    console.log('Hello World!!!');
    /* Puede que reviente o puede que regrese un numero */
    const posibility = (message) => {
        if (message.length > 5) {
            throw new Error(message);
        }
        return 1;
    };
})();
