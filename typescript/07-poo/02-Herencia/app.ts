(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log('Constructor Avenger llamado');
    }

    protected getFullName(): string {
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
      console.log('Constructor Xmen llamado');
    }

    public getFullNameFromXmen(): string {
      return super.getFullName();
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine);
  console.log(wolverine.getFullNameFromXmen());
})();