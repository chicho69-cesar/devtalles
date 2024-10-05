"use strict";
(() => {
    // en la tupla el primer elemento siempre es string y el segundo siempre es number
    // y solamente acepta estos valores
    const heroe = ['Dr. Strange', 100];
    /* heroe[0] = 50;
    heroe[1] = 'Iron man'; */
    heroe[0] = 'Iron man';
    heroe[1] = 50;
    console.log(heroe);
    const villian = ['Tanos', 600, true];
    console.log(villian);
})();
