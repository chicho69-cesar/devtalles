(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    actives: boolean;
    power: number;
  };

  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    actives: true,
    power: 1500.17282
  };

  /* const { power, vision } = avengers;
  console.log(power.toFixed(2), vision.toUpperCase()); */

  const printAvenger = ({ vision, ...rest }: Avengers): void => {
    // let { vision } = avengers;
    console.log(vision, rest.ironman);
  }

  printAvenger(avengers);
})();