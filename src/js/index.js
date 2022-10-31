const container = document.querySelector('.todos');

const renderTodos = async () => {
  let uri = 'http://localhost:3000/todos?_sort=id&_order=desc';

  const res = await fetch(uri);
  const todos = await res.json();
  // console.log(todos);

  let template = '';
  todos.forEach((todo) => {
    template += `
    <div class="todo">
    <h2>${todo.title}</h2>
    <p>${todo.body}</p>...</p>
    <a href="/src/details.html?id=${todo.id}">Read more</a>
    </div>
    `;
  });

  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderTodos());
