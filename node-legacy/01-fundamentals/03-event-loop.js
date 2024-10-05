/* const saludar = nombre => {
  return `Hola ${nombre}`;
}

console.log(saludar("Cesar")); */

console.log("Inicio del programa");


/* Cuando ejecutamos procesos aparte de la ejecucion principal del programa
como lo son en este caso por ejemplo los timeout, estos se agregan a una pila
de ejecuciones, por lo que el codigo se ira ejecutando a medida que este preparado
para ser ejecutado. Empleando los procesos que son bloqueantes y no bloqueantes */
setTimeout(() => {
  console.log("Primer timeout");
}, 3000);

setTimeout(() => {
  console.log("Segundo timeout");
}, 0);

setTimeout(() => {
  console.log("Tercer timeout");
}, 0);

console.log("Fin del programa");
