(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log('Constructor Avenger llamado!');
    }

    protected getFullname(): string {
      return `${ this.name } ${ this.realName }`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      console.log('Constructor Xmen llamado!');
    }

    // Creamos un getter
    get fullName(): string {
      return `${ this.name } - ${ this.realName }`;
    }

    // Creamos un setter
    set fullName(heroName: string) {
      const [ theName, theRealName] = heroName.split(' - ');
      this.name = theName;
      this.realName = theRealName;
    }

    public getFullnameFromXmen(): string {
      return super.getFullname();
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
  
  console.log(wolverine.fullName);
  wolverine.fullName = 'WolverineX - LoganX';
  console.log(wolverine.fullName);
})();