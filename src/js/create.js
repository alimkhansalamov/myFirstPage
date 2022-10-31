const form = document.querySelector('form');

const createTodo = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
  };

  await fetch('http://localhost:3000/todos', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });

  window.location.replace('/src/index.html');
};

form.addEventListener('submit', createTodo);
