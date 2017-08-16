const todos = [{
  id: 1,
  text: 'Buy milk'
}];

function readTodos() {
  return todos;
}

module.exports = Object.freeze({
  readTodos
});
