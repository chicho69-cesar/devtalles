"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado!');
        }
        // Creamos un getter
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        // Creamos un setter
        set fullName(heroName) {
            const [theName, theRealName] = heroName.split(' - ');
            this.name = theName;
            this.realName = theRealName;
        }
        getFullnameFromXmen() {
            return super.getFullname();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);
    wolverine.fullName = 'WolverineX - LoganX';
    console.log(wolverine.fullName);
})();
