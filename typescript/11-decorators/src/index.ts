/* Los decoradores no son mas que funciones que expanden, añaden,
restringe o limitan funcionalidades a otras clases, funciones,
metodos, propiedades, etc.
Los decoradores tambien son funciones que se ejecutan en el momento
de transpilacion de nuestro codigo, aunque no se este ejecutando. */

import { Pokemon } from './decorators/pokemon';

const charmander: Pokemon = new Pokemon('Charmander');

/* No podemos modificar el prototype de la clase Pokemon porque el 
decorador que creamos de blockPrototype bloquea esto */
// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.savePokemonToDB(400);

/* Gracias al decorador de readOnly que creamos esta propiedad no va a 
poder ser sobreescrita, por lo que nos va a marcar un error */
// charmander.publicApi = 'Hola';

console.log(charmander);