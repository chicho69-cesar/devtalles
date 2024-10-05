"use strict";
(() => {
    ;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 2, 3, 4],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    console.log(superman);
})();
