(() => {
  /* Las interfaces funcionan basicamente igual que los type en 
  TypeScript, con la unica diferencia que un type no lo puedes 
  extender con mas campos, mientras que las interfaces si que se 
  pueden extender e implementarlas por clases u otros types */
  interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: [ 1, 2 ]
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: [ 1, 2, 3, 4 ],
    getName() {
      return this.name
    }
  };

  console.log(flash);
  console.log(superman);
})();