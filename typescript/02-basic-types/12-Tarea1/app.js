"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerzas;
    (function (Fuerzas) {
        Fuerzas[Fuerzas["acuaman"] = 0] = "acuaman";
        Fuerzas[Fuerzas["batman"] = 1] = "batman";
        Fuerzas[Fuerzas["flash"] = 5] = "flash";
        Fuerzas[Fuerzas["superman"] = 100] = "superman";
    })(Fuerzas || (Fuerzas = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
