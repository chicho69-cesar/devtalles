(() => {
  // Crear interfaces
  interface Person {
    name: string;
    age: number;
    sex: string;
    doSomething(action: string): void;
  }

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  interface Automovil {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
  }

  const conducirBatimovil = ( auto: Automovil ): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }

  const batimovil: Automovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("...... gogogo!!!");
    }
  }

  conducirBatimovil(batimovil);

  // Cree una interfaz con que permita utilizar el siguiente objeto
  // utilizando propiedades opcionales

  interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
  }

  const reir = ( guason: Guason ): void => {
    if ( guason.reir ){
      console.log("JAJAJAJA");
    }
  }

  reir(guason);


  // Cree una interfaz para la siguiente funcion

  interface CiudadGotica {
    (ciudadanos: string[]): number;
  }

  const ciudadGotica: CiudadGotica = ( ciudadanos: string[] ): number => {
    return ciudadanos.length;
  }

  console.log(ciudadGotica([ 'Batman', 'Guason', 'Pinguino' ]));

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
 
  interface Ciudadano {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
  }

  class Persona implements Ciudadano {
    public nombre: string;
    public edad: number;
    public sexo: string;
    public estadoCivil: string;

    constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.estadoCivil = estadoCivil;
    }

    public imprimirBio(): void {
      console.log(`${ this.nombre }, ${ this.edad }, ${ this.sexo }, ${ this.estadoCivil }`);
    }
  }

  let yo: Persona = new Persona('Cesar', 21, 'Masculino', 'Soltero');
  console.log(yo);
})();