// const fs = require('node:fs'); // Requerimos la libreria del file system de node
/* Esta es la forma mas recomendada de hacer la importacion actualmente, pero
para poder usarla los archivos deben tener la extension .mjs */
// import * as fs from 'node:fs';

const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

// const args = process.argv; // Recuperamos los argumentos de la consola

createFile(argv.b, argv.l, argv.u)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
