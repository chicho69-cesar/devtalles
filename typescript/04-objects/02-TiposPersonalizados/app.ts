(() => {
  /* Creamos un tipo de dato para crear objetos heroes; podemos terminar
  la defincion de cada propiedad ya sea con coma, o punto y coma; */
  type Hero = {
    name: string,
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  // Creamos un objeto de tipo Hero
  let flash: Hero = {
    name: 'Barry Allen', 
    age: 24,
    powers: [ 'Super velocidad', 'Viajar en el tiempo' ]
  };

  console.log(flash);

  let superman: Hero = {
    name: 'Clark Kent', 
    powers: [ 'Super fuerza', 'Volar', 'Rayos laser' ],
    getName(): string {
      return this.name
    }
  };

  console.log(superman);
})();