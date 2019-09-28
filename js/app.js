(function (window) {
	'use strict';
  const todoInput = document.querySelectorAll('.new-todo')[0];
  const todoList = document.querySelectorAll('.todo-list')[0];

	// Your starting point. Enjoy the ride!

  function todoTemplate(value) {
    return `
       <div class="view">
         <input class="toggle" type="checkbox" {{checked}}>
         <label>${value}</label>
         <button class="destroy"></button>
       </div>
    `;

  }

  function createTodo(value) {
    const newTodo = document.createElement('li');

    newTodo.innerHTML = todoTemplate(value);

    todoList.append(newTodo)
  }

  function handleEvent(e) {
    if (e.code === 'Enter' && e.target.value) {
      createTodo(e.target.value)
    }
  }

  todoInput.addEventListener('keyup', handleEvent)

})(window);
