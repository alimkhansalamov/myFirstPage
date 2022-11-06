// working on styles, js has to be changed a lot

//first -> taking params starting from ? till the end
// with get method, we are getting only id number and saving it in id variable
// const id = new URLSearchParams(window.location.search).get('id');
// const container = document.querySelector('.details');
// const deleteBtn = document.querySelector('.delete');

// GET todos
// const renderDetails = async () => {
//   const res = await fetch('http://localhost:3000/todos/' + id);
//   const todo = await res.json();
//   console.log(todo);

//   const template = `
//     <h1>${todo.title}</h1>
//     <p>${todo.body}</p>
//   `;

//   container.innerHTML = template;
// };

// deleteBtn.addEventListener('click', async (e) => {
//   const res = await fetch('http://localhost:3000/todos/' + id, {
//     method: 'DELETE',
//   });

//   window.location.replace('/src/index.html');
// });

// const doc = {
//   title: form.title.value,
//   body: form.body.value,
// };

// window.addEventListener('DOMContentLoaded', () => renderDetails());
