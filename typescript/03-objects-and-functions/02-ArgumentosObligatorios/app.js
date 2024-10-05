"use strict";
(() => {
    // -Todos estos parametros son obligatorios
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
