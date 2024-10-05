export const printObject = (argument: any): void => {
  console.log(argument);
}

/* Declaramos una funcion de tipo generica T, con un argumento generico
y un valor de retorno del mismo generico */
export function genericFunction<T>(argument: T): T {
  return argument;
}

/* Funcion con genericos en una funcion de flecha */
export const genericFunctionArrow = <T>(argument: T): T => {
  return argument;
}