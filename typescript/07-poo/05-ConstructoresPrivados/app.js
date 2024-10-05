"use strict";
(() => {
    class Apocalipsis {
        /* Los constructores privados solo pueden ser llamados dentro de la misma
        clase, siendo muy utiles para crear singletons */
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis(name) {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis(name);
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis('I\'m Apocalipsis! ... el unico');
    const apocalipsis2 = Apocalipsis.callApocalipsis('I\'m Apocalipsis! ... el unico');
    const apocalipsis3 = Apocalipsis.callApocalipsis('I\'m Apocalipsis! ... el unico');
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
