(() => {
  // Establecemos un valor por defecto
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    const concatenatedName: string = `${ firstName } ${ lastName || '-----' }`;
    return upper
      ? concatenatedName.toUpperCase()
      : concatenatedName;
  }

  const name: string = fullName('Cesar', 'Villalobos Olmos', true);
  console.log({ name });
})();