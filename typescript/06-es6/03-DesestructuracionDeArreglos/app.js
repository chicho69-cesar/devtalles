"use strict";
(() => {
    // Desestructuramos un array
    const avengers = ['Cap. America', 'Ironman', 'Hulk', 'Thor'];
    const [, ironman] = avengers;
    console.log({ ironman });
    // Desestructuramos una tupla
    const me = ['Cesar', true, 21];
    const [name] = me;
    console.log({ name });
})();
