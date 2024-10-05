(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    /* Los constructores privados solo pueden ser llamados dentro de la misma
    clase, siendo muy utiles para crear singletons */
    private constructor(public name: string) { }

    static callApocalipsis(name: string): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis(name);
      }

      return Apocalipsis.instance;
    }

    public changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1: Apocalipsis = Apocalipsis.callApocalipsis('I\'m Apocalipsis! ... el unico');
  const apocalipsis2: Apocalipsis = Apocalipsis.callApocalipsis('I\'m Apocalipsis! ... el unico');
  const apocalipsis3: Apocalipsis = Apocalipsis.callApocalipsis('I\'m Apocalipsis! ... el unico');
  
  console.log(apocalipsis1);
  console.log(apocalipsis2);
  console.log(apocalipsis3);

  apocalipsis1.changeName('Xavier');

  console.log(apocalipsis1);
  console.log(apocalipsis2);
  console.log(apocalipsis3);
})();