const nick = 'Deadpool';
const real = 'Wade Winston';

// Hacemos una concatenación de strings normal
const normal = nick + ' ' + real;
// Hacemos una concatenación de strings con template strings
const template = `${nick} ${real}`;

console.log(normal);
console.log(template);

const multiline = `
<div>
  <h1>Hola Mundo!</h1>
</div>
`;

console.log(multiline);
