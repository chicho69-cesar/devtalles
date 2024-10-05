"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    conducirBatimovil(batimovil);
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    reir(guason);
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    console.log(ciudadGotica(['Batman', 'Guason', 'Pinguino']));
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`${this.nombre}, ${this.edad}, ${this.sexo}, ${this.estadoCivil}`);
        }
    }
    let yo = new Persona('Cesar', 21, 'Masculino', 'Soltero');
    console.log(yo);
})();
