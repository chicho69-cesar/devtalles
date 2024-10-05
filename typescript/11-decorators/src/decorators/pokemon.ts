/* Creamos un decorador basico para imprimir el constructor de una clase */
function printToConsole(constructor: Function): void {
  console.log(constructor);
}

/* Creamos un decorador condicional */
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole
  }

  return () => {};
}

/* Creamos un decorador para bloquear el prototipo de la clase que lo llame */
const blockPrototype = function(constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

/* Creamos un factory decorator para un metodo */
function checkValidPokemonId(): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    // console.log({ target, propertyKey, descriptor });
    // descriptor.value = () => console.log('Hola Mundo!!!');

    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe estar entre 1 y 800');
      } else {
        originalMethod(id);
      }
    }
  }
}

/* Creamos un decorador para convertir un propiedad en solo lectura */
function readOnly(isWritable: boolean = true): Function {
  return function(target: any, propertyKey: string): PropertyDescriptor {
    // console.log({ target, propertyKey });

    const descriptor: PropertyDescriptor = {
      get(): string {
        // console.log(this, 'getter');
        return 'Cesar';
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        });
      }
    };

    return descriptor;
  }
}

// Los decoradores se establecen con el simbolo @
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number): void {
    console.log(`Pokemon ${ id } saved on DB`);
  }
}