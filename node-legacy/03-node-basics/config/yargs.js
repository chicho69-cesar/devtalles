/* Creamos la configuracion para los yargs de la aplicacion */
const argv = require('yargs')
  .option('b', { // Definimos una opción b:base
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('u', {
    alias: 'until',
    type: 'number',
    default: 10,
    describe: 'Es el limite de la tabla de multiplicar'
  })
  .check((argv, options) => { // Hacemos las condiciones que deben cumplir los yargs
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    }
    return true;
  })
  .argv;

module.exports = argv;
