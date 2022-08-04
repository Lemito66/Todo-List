import './styles.css';

/* import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */

import {Todo,TodoList} from './classes';//Aqui se importa todo del archivo index.js que esta en la carpeta classes
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo =>  crearTodoHtml( todo )); // Simplicando abajo
todoList.todos.forEach(crearTodoHtml);

/* const newTodo = new Todo('Aprender JavaScript');
todoList.nuevoTodo(newTodo); */
//todoList.todos[0].imprimirClase();

console.log('Todos',todoList.todos);


/* const tarea = new Todo('Aprender Javascript!!');

todoList.nuevoTodo(tarea);

console.log(todoList);
crearTodoHtml( tarea ); */

//localStorage.setItem('mi-key','ABC123');
//sessionStorage.setItem('mi-key','ABC123');

/* setTimeout(() => {
    localStorage.removeItem('mi-key');
},1500); */