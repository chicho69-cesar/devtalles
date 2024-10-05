(() => {
  class Avenger {
    private name: string; // Propiedad privada
    private team?: string; // Propiedad privada opcional
    public realName: string; // Propiedad publica

    static avgAge: number = 35; // Propiedad estatica

    // Creamos un metodo estatico
    static getClassName(): string {
      return this.name;
    }

    // Constructor
    constructor(name: string, team: string, realName: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }

    // Creamos un metodo
    public bio(): string {
      return `${ this.name } (${ this.team })`;
    }
  }

  class JusticeMember {
    /* Forma corta de crear las propiedades de una clase */
    constructor (
      private name: string,
      public realName: string,
      public age?: number
    ) {}
  }

  // Creacion de un avenger
  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman);

  console.log(antman.realName);
  console.log(Avenger.avgAge);
  
  console.log(antman.bio());
  console.log(Avenger.getClassName());

  // Creacion de un miembro de la liga de la justicia
  const batman: JusticeMember = new JusticeMember("Batman", "Bruce Wayne");
  console.log(batman);
})();