(() => {
  const batman: string = 'Batman';
  const greenLantern: string = "Green Lantern";
  const blackVolcano: string = `Heroe: Black Volcano`;

  const abc: string = '123';

  console.log(batman.toUpperCase());
  console.log(`I'm ${ batman }, ${ abc }`);
  console.log(batman[10]?.toUpperCase() || 'No esta presente');
})();