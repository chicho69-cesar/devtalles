const deadpool = {
  nick: 'Deadpool', 
  real_name: 'Wade Winston Wilson',
  power: 'Regeneración',
  universe: 'Marvel',
  // age: 50,
  getInfo() {
    return `${this.nick} es ${this.real_name} y su poder es ${this.power}.`
  }
}

// Desestructuramos el objeto deadpool
const { nick, real_name, power, universe, age = 0 } = deadpool;
console.log(nick, real_name, power, universe, age);

function printHero({ nick, real_name, power, universe, age = 0 }) {
  console.log(nick, real_name, power, universe, age);
}

printHero(deadpool);

const avengers = ['Thor', 'Ironman', 'Captain America', 'Hulk', 'Black Widow', 'Hawkey'];

// Desestructuramos el arreglo avengers
const [avenger1, avenger2, avenger3, avenger4, avenger5, avenger6] = avengers;

console.log(avenger1, avenger2, avenger3, avenger4, avenger5, avenger6);
