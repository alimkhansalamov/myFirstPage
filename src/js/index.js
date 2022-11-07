// working on styles, js has to be changed a lot

// const id = new URLSearchParams(window.location.search).get('id');
// const container = document.querySelector('.todos');
// const search = document.querySelector('.search');

// const renderTodos = async (term) => {
//   let uri = 'http://localhost:3000/todos?_sort=id&_order=desc';

//   if (term) {
//     uri += `&q=${term}`;
//   }
//   const res = await fetch(uri);
//   const todos = await res.json();

//   let template = '';

//   const deleteTodo = async (e) => {
//     e.target.remove();
//   };

//   todos.forEach((todo) => {
//     template += `
//     <div class="todo">
//     <h2>${todo.title}</h2>
//     <p>${todo.body.length > 200 ? todo.body.slice(0, 150) + ' ...' : todo.body}</p>
//     <a href="/src/details.html?id=${todo.id}">Read more</a>
//     </div>
//     `;
//   });

//   container.innerHTML = template;
// };

// //search
// search.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   renderTodos(search.term.value.trim());
// });

// window.addEventListener('DOMContentLoaded', () => renderTodos());

let a = 5;
let b = 10;
console.log(a + b);
return a + b;
