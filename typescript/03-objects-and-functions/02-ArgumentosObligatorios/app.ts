((): void => {
  // -Todos estos parametros son obligatorios
  const fullName = (firstName: string, lastName: string): string => {
    return `${ firstName } ${ lastName }`;
  }

  const name: string = fullName('Tony', 'Stark');
  console.log({ name });
})();