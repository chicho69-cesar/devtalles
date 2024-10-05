import { Hero as SuperHero } from './classes/Hero';
import * as HeroClasses from './classes/Hero';
import powers from './data/powers';

const ironman: SuperHero = new SuperHero('Tony Stark', 1, 55);
console.log(ironman);

const thor: HeroClasses.Hero = new HeroClasses.Hero('Thor', 5, 1200);
console.log(thor);

console.log(powers);
console.log(powers.find(p => p.id === ironman.powerId));

console.log(ironman.getPower());
console.log(thor.getPower());