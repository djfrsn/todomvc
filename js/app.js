(function (window) {
	'use strict';
  const todoInput = document.querySelectorAll('.new-todo')[0];
  const todoList = document.querySelectorAll('.todo-list')[0];
  var destroyTodo = document.querySelectorAll('.destroy');

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

    todoList.append(newTodo);

    addRemoveTodoListener(newTodo.querySelector('.destroy'));
  }

  function handleTodoAdd(e) {
    if (e.code === 'Enter' && e.target.value) {
      createTodo(e.target.value)
    }
  }

  function removeTodo(e) {
    e.currentTarget.parentElement.parentElement.remove(removeTodo)
  }

  function addRemoveTodoListener(button) {
    button.addEventListener('click', removeTodo);
  }

  todoInput.addEventListener('keyup', handleTodoAdd);
  destroyTodo.forEach(function(button) {
    addRemoveTodoListener(button);
  })
})(window);
