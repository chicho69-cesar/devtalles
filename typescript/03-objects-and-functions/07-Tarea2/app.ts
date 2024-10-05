// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar: Function = (heroes: string[]): number => {
  return heroes.length;
}

const superHeroes: string[] = [ "Flash", "Arrow", "Superman", "Linterna Verde" ];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = false): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = (...personas: string[]): string => {
  return personas.join(", ");
}

// Tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: number[]): void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
console.log(noHaceNadaTampoco(1, "Hola", true, []));