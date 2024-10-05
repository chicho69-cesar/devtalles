require('colors');
const inquirer = require('inquirer');

const inquirerMenu = async () => {
  console.clear();
  console.log('\n============================='.green);
  console.log('    Seleccione una opción'.white);
  console.log('=============================\n'.green);

  const questions = [
    {
      type: 'list',
      name: 'option',
      message: 'Que desea hacer?',
      choices: [
        {
          value: 1,
          name: `${'1.'.green} Buscar ciudad`
        },
        {
          value: 2,
          name: `${'2.'.green} Historial`
        },
        {
          value: 0,
          name: `${'0.'.green} Salir`
        }
      ]
    }
  ];

  const { option } = await inquirer.prompt(questions);
  return option;
}

const pause = async () => {
  const question = {
    type: 'input',
    name: 'enter',
    message: `Presione ${ 'ENTER'.green } para continuar`
  };

  console.log('\n');
  await inquirer.prompt([question]);
}

const readInput = async (message = '') => {
  const question = {
    type: 'input',
    name: 'desc',
    message,
    // Función para validar los valores del input
    validate(value) {
      if (value.length === 0) {
        return 'Por favor ingrese un valor';
      }

      return true;
    }
  };

  const { desc } = await inquirer.prompt([question]);
  return desc;
}

const confirm = async (message) => {
  const question = {
    type: 'confirm',
    name: 'ok',
    message
  };

  const { ok } = await inquirer.prompt([question]);
  return ok;
}

const listPlaces = async (places = []) => {
  const choices = places.map((place, index) => {
    const idx = `${(index + 1)}.`.green;

    return {
      value: place.id,
      name: `${idx} ${place.name}`
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar'
  });

  const selectQuestions = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione lugar: ',
      choices
    }
  ];

  const { id } = await inquirer.prompt(selectQuestions);
  return id;
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  confirm,
  listPlaces
}
