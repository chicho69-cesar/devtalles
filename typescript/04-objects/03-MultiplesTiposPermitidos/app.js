"use strict";
(() => {
    let myCustomVariable = 'Cesar';
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: ['Inteligencia']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
