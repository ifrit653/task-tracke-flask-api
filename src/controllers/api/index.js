const todos = [];

let id = 0;

function createTodo(todo) {
  todos.push(Object.assign({
    id: ++id
  }, todo));
}

function readTodos() {
  return todos;
}

function deleteTodo(id) {
  // todos = todos.filter((todo) => todo.id !== id);
  const isFound = todos.some((todo, idx) => {
    if (todo.id === id) {
      todos.splice(idx, 1);
      return true;
    }
  });

  return isFound;
}

module.exports = Object.freeze({
  createTodo,
  readTodos,
  deleteTodo
});
