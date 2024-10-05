"use strict";
(() => {
    class Avenger {
        // Creamos un metodo estatico
        static getClassName() {
            return this.name;
        }
        // Constructor
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        // Creamos un metodo
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35; // Propiedad estatica
    class JusticeMember {
        /* Forma corta de crear las propiedades de una clase */
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
    }
    // Creacion de un avenger
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
    console.log(antman);
    console.log(antman.realName);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getClassName());
    // Creacion de un miembro de la liga de la justicia
    const batman = new JusticeMember("Batman", "Bruce Wayne");
    console.log(batman);
})();
