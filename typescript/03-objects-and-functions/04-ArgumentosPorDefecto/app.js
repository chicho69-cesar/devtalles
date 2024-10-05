"use strict";
(() => {
    // Establecemos un valor por defecto
    const fullName = (firstName, lastName, upper = false) => {
        const concatenatedName = `${firstName} ${lastName || '-----'}`;
        return upper
            ? concatenatedName.toUpperCase()
            : concatenatedName;
    };
    const name = fullName('Cesar', 'Villalobos Olmos', true);
    console.log({ name });
})();
