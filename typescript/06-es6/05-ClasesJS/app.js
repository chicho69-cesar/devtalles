(() => {
  class Avenger {
    name;
    power;

    constructor(name = 'No name', power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name = 'No name', power = 0) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 1200);
  console.log(hulk);

  const falcon = new FlyingAvenger('Falcon', 125);
  console.log(falcon);
})();