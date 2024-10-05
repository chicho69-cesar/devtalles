(() => {
  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string
    ) {
      // 
    }
  }

  class Xmen extends Mutant {
    public saveTheWorld(): string {
      return 'Mundo a salvo!';
    }
  }

  class Villian extends Mutant {
    public conqueerTheWorld(): string {
      return 'Mundo conquistado!';
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  console.log(wolverine);
  console.log(wolverine.saveTheWorld());

  const magneto: Villian = new Villian('Magneto', 'Magnus');
  console.log(magneto);
  console.log(magneto.conqueerTheWorld());

  const printFullname = (character: Mutant) => {
    console.log(`${ character.name } ${ character.realName }`);
  }

  printFullname(wolverine);
  printFullname(magneto);
})();