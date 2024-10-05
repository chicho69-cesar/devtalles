const fs = require('node:fs');
const colors = require('colors');

const createFile = (base = 1, list = false, until = 10) => {
  return new Promise((resolve, reject) => {
    let output = '=====================\n'.gray;
    output += '     Tabla del: ';
    output += `${base}\n`.green;
    output += `=====================\n`.gray;

    let text = '=====================\n';
    text += `     Tabla del ${base}\n`;
    text += `=====================\n`;

    for (let i = 1; i <= until; i++) {
      output += `${base}` + ' x '.yellow + `${i}` + ' = '.yellow + `${(base * i)}\n`;
      text += `${base} x ${i} = ${(base * i)}\n`;
    }

    list && console.log(output);

    try {
      fs.writeFileSync(`out/tabla-${base}.txt`, text);
      resolve(`Archivo: tabla-${base}.txt creado`.cyan);
    } catch (error) {
      reject(`No se pudo crear el archivo, ERROR!: ${error}`);
    }
  });
}

const createFileAsync = async (base = 1) => {
  try {
    let output = '=====================\n';
    output += `     Tabla del ${base}\n`;
    output += `=====================\n`;

    for (let i = 1; i <= 10; i++) {
      output += `${base} x ${i} = ${(base * i)}\n`;
    }

    console.log(output);

    // Escribimos el archivo de manera asincrona
    /* fs.writeFile(`tabla-${base}.txt`, output, err => {
      if (err) reject(err);
      resolve(`tabla-${base}.txt`);
    }); */

    // Escribimos el archivo de manera sincrona
    fs.writeFileSync(`tabla-${base}.txt`, output);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw `No se pudo crear el archivo, ERROR!: ${error}`;
  }
}

module.exports = {
  createFile,
  createFileAsync
}
