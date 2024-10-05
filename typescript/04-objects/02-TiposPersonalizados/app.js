"use strict";
(() => {
    // Creamos un objeto de tipo Hero
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        powers: ['Super fuerza', 'Volar', 'Rayos laser'],
        getName() {
            return this.name;
        }
    };
    console.log(superman);
})();
