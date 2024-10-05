(() => {
  // arreglo de tipos string o number
  // const numbers: (string | number)[] = [ 1, 2, 3, 4, 5, '6', 7, 8, 9 ];
  const numbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  console.log(numbers);

  const villians: string[] = [ 'Omega rojo', 'Dormamu', 'Duende verde' ];
  villians.forEach(v => console.log(v.toUpperCase()));
})();