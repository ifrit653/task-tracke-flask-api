window.onload = () => {
  const todosNode = document.getElementById('todos');
  const formNode = document.getElementById('form');

  formNode.addEventListener('submit', (event) => {
    console.log('Submitted');
    event.preventDefault();
  });

  fetch('http://localhost:8080/api/todos')
    .then((response) => response.json())
    .then((todos) => {
      todosNode.innerHTML = todos
        .map((todo) => {
          return `<li>${todo.text}</li>`;
        })
        .join('\n');
    });
};
