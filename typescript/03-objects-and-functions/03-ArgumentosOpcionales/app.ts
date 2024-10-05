((): void => {
  /* Mediante el signo ? hacemos que nuestros parametros sean opcionales */
  const fullName = (firstName: string, lastName?: string): string => {
    return `${ firstName } ${ lastName || '-----' }`;
  }

  const name: string = fullName('Tony');
  console.log({ name });
})();