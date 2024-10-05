"use strict";
(() => {
    /* Cuando creamos una constante de un objeto donde al final le ponemos
    as const hacemos que todas las propiedades del objeto sean readonly, es decir,
    que no las vamos a poder modificar ni de agregar nuevas propiedades en
    tiempo de ejecucion */
    const ROLES_VALUES = {
        admin_user: 'admin',
        user: 'user',
        editor_user: 'editor',
    };
    const user = {
        id: '1',
        name: 'Cesar 1',
        age: 21,
        email: 'cesar@gmail.com',
        username: 'cesar',
        isActive: true,
    };
    const nameOfUser = {
        name: 'Cesar 2',
    };
    const responseUser = {
        name: 'Cesar',
        age: 21,
        email: 'cesar@gmail.com',
        username: 'cesar',
        isActive: true,
        role: 'admin',
    };
    const nonRequiredUser = {
        name: 'Cesar',
        age: 21,
    };
    const requiredUser = {
        id: '1',
        name: 'Cesar',
        age: 21,
        email: 'cesar@gmail.com',
        username: 'cesar',
        isActive: true,
        role: 'admin',
    };
    const roleStored = {
        admin: {
            id: '1',
            name: 'admin',
        },
        user: {
            id: '2',
            name: 'user',
        },
        editor: {
            id: '3',
            name: 'editor',
        }
    };
    console.log(user);
    console.log(user);
    console.log(nameOfUser);
    console.log(responseUser);
    console.log(nonRequiredUser);
    console.log(requiredUser);
    console.log(roleStored);
    const returnedFunction = (msg) => ({
        message: msg.toUpperCase()
    });
})();
