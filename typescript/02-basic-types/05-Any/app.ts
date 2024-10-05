(() => {
  let avenger: any = 123; // any acepta cualquier tipo de dato
  let exists; // en las variables let el valor queda any
  let power;

  avenger = 'Dr. Strange'; // hacemos a avenger tomar string
  // console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0)); // hacemos casting

  avenger = 150.23549461616; // hacemos a avenger tomar number
  // console.log(avenger.toFixed(2));
  console.log(<number>avenger.toFixed(2)); // otra forma de hacer cast

  console.log(exists);
  console.log(power);
})();