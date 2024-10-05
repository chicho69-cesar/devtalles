(() => {
  // Desestructuramos un array
  const avengers: string[] = [ 'Cap. America', 'Ironman', 'Hulk', 'Thor' ];
  const [ , ironman ] = avengers;

  console.log({ ironman });

  // Desestructuramos una tupla
  const me: [ string, boolean, number ] = [ 'Cesar', true, 21 ];
  const [ name ] = me;

  console.log({ name });
})();