(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatiSignal: () => string = (): string => {
    return 'Batiseñal activada!';
  }

  console.log(typeof activateBatiSignal);

  const heroName: string = returnName();
  console.log(heroName);
})();