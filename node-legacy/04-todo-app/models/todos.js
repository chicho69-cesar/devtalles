require('colors');
const Todo = require('./todo');

class Todos {
  _todos = {};

  constructor() {
    this._todos = {};
  }

  get _todosArr() {
    const list = [];
    Object.keys(this._todos).forEach(key => {
      const todo = this._todos[key];
      list.push(todo);
    });
    return list;
  }

  loadTodosFromArray(todos = []) {
    todos.forEach(todo => {
      this._todos[todo.id] = todo;
    });
  }

  createTodo(desc = '') {
    const todo = new Todo(desc);
    this._todos[todo.id] = todo;
  }

  showCompleteList() {
    console.log();
    this._todosArr.forEach((todo, index) => {
      let todoText = `${index + 1}.`.green + ` ${todo.desc} :: `;
      todoText += todo.done ? `Completada en ${todo.date}`.green : 'Pendiente'.red;
      console.log(todoText);
    });
  }

  showPendingOrCompletedList(completed = true) {
    console.log();
    this._todosArr.filter(todo => todo.done === completed).forEach((todo, index) => {
      let todoText = `${index + 1}.`.green + ` ${todo.desc} :: `;
      todoText += todo.done ? `Completada en ${todo.date}`.green : 'Pendiente'.red;
      console.log(todoText);
    });
  }

  deleteTodo(id = '') {
    if (this._todos[id]) {
      delete this._todos[id];
    }
  }

  toggleCompleteTodos(ids = []) {
    ids.forEach(id => {
      if (!this._todos[id].done) {
        this._todos[id].done = true;
        this._todos[id].date = new Date().toISOString();
      }
    });

    this._todosArr.forEach(todo => {
      if (!ids.includes(todo.id)) {
        this._todos[todo.id].done = false;
        this._todos[todo.id].date = null;
      }
    });
  }
}

module.exports = Todos;
