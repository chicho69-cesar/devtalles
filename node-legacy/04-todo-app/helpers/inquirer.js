require('colors');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`
      }
    ]
  }
];

const inquirerMenu = async () => {
  console.clear();
  console.log('\n============================='.green);
  console.log('    Seleccione una opción'.white);
  console.log('=============================\n'.green);

  const { opcion } = await inquirer.prompt(questions);
  return opcion;
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
    // Funcion para validar los valores del input
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

const todoListToDelete = async (todos = []) => {
  const choices = todos.map((todo, index) => {
    const idx = `${(index + 1)}.`.green;

    return {
      value: todo.id,
      name: `${idx} ${todo.desc}`
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar'
  });

  const deleteQuestions = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ];

  const { id } = await inquirer.prompt(deleteQuestions);
  return id;
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

const showTodosCheckList = async (todos = []) => {
  const choices = todos.map((todo, index) => {
    const idx = `${(index + 1)}.`.green;

    return {
      value: todo.id,
      name: `${idx} ${todo.desc}`,
      checked: todo.done
    };
  });

  const deleteQuestions = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccione tareas',
      choices
    }
  ];

  const { ids } = await inquirer.prompt(deleteQuestions);
  return ids;
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  todoListToDelete,
  confirm,
  showTodosCheckList
}
