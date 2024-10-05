"use strict";
(() => {
    /* Definimos un objeto con los tipos de datos especificos del
    objeto y de las propiedades del mismo */
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Super fuerza', 'Vision laser', 'Volar'],
        getName() {
            return this.name;
        }
    };
    console.log((flash.getName)());
})();
