(() => {
  /* TypeScript es capaz de inferir los tipos de datos */
  const a = 10; // const a: 10
  let b = 10; // b: number

  const c: number = 10; // siempre es mejor agregarle el tipo de dato
  let d: number = 10;
  d = 3.1416;

  let e; // e: any -> Cualquier cosa
  e = 10;
  e = 'Hola';
  e = {};

  // la funcion no regresa nada
  function sayHello(msg: string) {
    console.log(msg + ' Cesar');
  }

  sayHello('Hola');
})();