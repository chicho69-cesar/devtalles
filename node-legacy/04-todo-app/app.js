require('colors');
// const { showMenu, pause } = require('./helpers/messages');
const { 
  inquirerMenu, 
  pause,
  readInput,
  todoListToDelete,
  confirm,
  showTodosCheckList
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Todos = require('./models/todos');

console.clear();

const main = async () => {
  let opt = '';
  const todos = new Todos();

  const todosDB = readDB();

  if (todosDB) {
    todos.loadTodosFromArray(todosDB);
  }
  
  do {
    /* opt = await showMenu();
    console.log({ opt }); */
    
    opt = await inquirerMenu();
    
    switch (opt) {
      case '1':
        const desc = await readInput('Ingrese la tarea: ');
        todos.createTodo(desc);
        break;

      case '2':
        todos.showCompleteList();
        break;
        
      case '3':
        todos.showPendingOrCompletedList(true);
        break;
        
      case '4':
        todos.showPendingOrCompletedList(false);
        break;
 
      case '5':
        const ids = await showTodosCheckList(todos._todosArr);
        todos.toggleCompleteTodos(ids);
        break;

      case '6':
        const id = await todoListToDelete(todos._todosArr);
        
        if (id !== '0') {
          const ok = await confirm('¿Estás seguro que deseas borrar la tarea?');
          
          if (ok) {
            todos.deleteTodo(id);
            console.log('Tarea eliminada!');
          }
        }
        
        break;

      default:
        break;
    }

    saveDB(todos._todosArr);
    await pause();
  } while(opt !== '0');
}

main();
