"use strict";
(() => {
    /* Mediante el signo ? hacemos que nuestros parametros sean opcionales */
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
