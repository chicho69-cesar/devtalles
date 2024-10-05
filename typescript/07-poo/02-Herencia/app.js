"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        getFullNameFromXmen() {
            return super.getFullName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.getFullNameFromXmen());
})();
