"use strict";
(() => {
    /* En TypeScript no es nada recomendado usar la palabra reservada
    var, unicamente se recomienda usar let o usar const */
    console.log('Let');
    const NAME = 'Cesar';
    const point = {
        x: 10,
        y: 20,
    };
    point.x = 15;
    console.log(NAME);
    console.log(point);
    const getName = function () {
        return NAME;
    };
    console.log(getName());
    let me = {
        name: 'Cesar',
        age: 21
    };
    console.log(me);
})();
