// Variables de scope global
/* Se pueden usar en cualquier parte del código */
var var1 = 'Variable 1';

// Variables de scope local
/* Solo se pueden usar dentro del scope donde se crea, o si no la redeclaramos
podemos acceder a scopes superiores */
let var2 = 'Variable 2';

// Constantes
/* No pueden ser redeclaradas, solo pueden cambiar con tipos de datos
mutables, como objetos, arreglos, sets, maps, etc. */
const var3 = 'Variable 3';

console.log(var1);
console.log(var2);
console.log(var3);
