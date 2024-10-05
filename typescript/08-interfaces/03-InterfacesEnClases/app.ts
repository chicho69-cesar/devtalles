(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  /* Implementamos las interfaces Xmen y Human en la clase Mutant,
  para estar seguro de que dicha clase va a tener un cierto comportamiento
  concreto y que nos permite seguir buenas practicas */
  class Mutant implements Xmen, Human {
    public name: string;
    public realName: string;
    public age: number;

    constructor(name: string, realName: string, age: number) {
      this.name = name;
      this.realName = realName;
      this.age = age;
    }

    mutantPower(id: number): string {
      return `${ id } - ${ this.name } ${ this.realName }`;
    }
  }

  let logan: Mutant = new Mutant('Wolverine', 'Logan', 40);
  console.log(logan);
})();