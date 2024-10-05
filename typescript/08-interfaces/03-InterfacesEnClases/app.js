"use strict";
(() => {
    /* Implementamos las interfaces Xmen y Human en la clase Mutant,
    para estar seguro de que dicha clase va a tener un cierto comportamiento
    concreto y que nos permite seguir buenas practicas */
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${id} - ${this.name} ${this.realName}`;
        }
    }
    let logan = new Mutant('Wolverine', 'Logan', 40);
    console.log(logan);
})();
