/* 
Proceso para iniciar un proyecto en TS:
1. Hacer un tsc --init
2. Configurar el archivo tsconfig.json
3. Hacer un tsc -w para compilar
*/

/* Las constantes se guardan con tipo de dato del valor que le asignamos */
const MSG = 'Cesar'
/* Las variables let van a tomar un tipo de dato estricto */
let msg: string = 'Hello World'

const me = {
  name: 'Cesar',
  age: 20
}

me.age++

console.log(msg + ' ' + MSG)
console.log(me)
console.log(me.age)