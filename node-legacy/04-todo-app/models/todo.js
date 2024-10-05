const { v4: uuidv4 } = require('uuid');

class Todo {
  id = '';
  desc = '';
  done = false;
  date = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.done = false;
    this.date = null;
  }
}

module.exports = Todo;
