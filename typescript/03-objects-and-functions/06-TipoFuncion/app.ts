(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${ name }`;
  const saveTheWorld = (): string => 'El mundo esta a salvo!';

  let myFunction: Function; // Tipo de dato funcion
  let mySecondFunc: (x: number, y: number) => number; // Creamos un tipo de dato 
  // funcion que recibe dos number y retorna number
  
  /* myFunction = 10;
  console.log({ myFunction }); */

  myFunction = addNumber;
  console.log({ myFunction });
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log({ myFunction });
  console.log(greet('Cesar'));

  myFunction = saveTheWorld;
  console.log({ myFunction });
  console.log(myFunction());

  mySecondFunc = addNumber;
  console.log(mySecondFunc(10, 15));
})();