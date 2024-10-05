"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // 
        }
    }
    class Xmen extends Mutant {
        saveTheWorld() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutant {
        conqueerTheWorld() {
            return 'Mundo conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine);
    console.log(wolverine.saveTheWorld());
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(magneto);
    console.log(magneto.conqueerTheWorld());
    const printFullname = (character) => {
        console.log(`${character.name} ${character.realName}`);
    };
    printFullname(wolverine);
    printFullname(magneto);
})();
